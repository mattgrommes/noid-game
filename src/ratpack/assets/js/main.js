'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div', { preload: preload, create: create, update: update });

var noid;
var lavaGroup;
var timer = 0;

function preload() {

    game.load.image('logo', 'assets/images/phaser.png');
    game.load.image('noid', 'assets/images/noid.png');
    game.load.image('lava', 'assets/images/lava.png');


}

function create() {

    noid = game.add.sprite(0, 0, 'noid');
    game.physics.arcade.enable(noid);
    noid.body.collideWorldBounds = true;

    $.get("http://localhost:5050/noids").done(function(data) {
        noid.genome = data.genome;

        var speedGenes = noid.genome.slice(0,7);
        noid.speed = parseInt( speedGenes.join(""), 2);

        var moveGenes = noid.genome.slice(8-15);
        noid.move = parseInt(parseInt( moveGenes.join(""), 2) / 2.6, 10);

        noid.body.velocity.x = noid.speed; // start moving
        noid.body.velocity.y = noid.speed; // start moving
        
        console.log("N: "+noid.speed + " - " + noid.move);
    });


    lavaGroup = game.add.group();

    lavaGroup.add(game.add.tileSprite(200, 350, 100, 100, 'lava'));
    lavaGroup.add(game.add.tileSprite(100, 100, 50, 100, 'lava'));

}

function update() {

    if(timer++ % 30 != 0 || !noid.genome) {
        return;
    }

    //game.physics.arcade.collide(noid, lavaGroup);

    var moveRand = Math.floor((Math.random() * 100) + 1);
    if(moveRand < noid.move) {
        var direction = Math.floor((Math.random() * 8) + 1);
        switch(direction) {
            case 1:
                noid.body.velocity.x = noid.speed;
                noid.body.velocity.y = 0;
                break;
            case 2:
                noid.body.velocity.x = -noid.speed;
                noid.body.velocity.y = 0;
                break;
            case 3:
                noid.body.velocity.y = noid.speed;
                noid.body.velocity.x = 0;
                break;
            case 4:
                noid.body.velocity.y = -noid.speed;
                noid.body.velocity.x = 0;
                break;
        }
        console.log("V: "+noid.body.velocity);

    }


}