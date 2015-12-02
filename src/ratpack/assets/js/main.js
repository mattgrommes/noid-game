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

    $.get("http://localhost:5050/noids").done(function(data) {
        noid = new Noid(data.genome);

        noid.sprite = game.add.sprite(0, 0, 'noid');
        game.physics.arcade.enable(noid.sprite);
        noid.sprite.body.collideWorldBounds = true;

        noid.sprite.body.velocity.x = noid.speed; // start moving
        noid.sprite.body.velocity.y = noid.speed; // start moving

        console.log("N: "+noid.speed + " - " + noid.movePercentage);
    });


    lavaGroup = game.add.group();

    lavaGroup.add(game.add.tileSprite(200, 350, 100, 100, 'lava'));
    lavaGroup.add(game.add.tileSprite(100, 100, 50, 100, 'lava'));

}

function update() {

    if(timer++ % 30 != 0 || !noid || !noid.genome) {
        return;
    }

    //game.physics.arcade.collide(noid, lavaGroup);

    noid.move();

}