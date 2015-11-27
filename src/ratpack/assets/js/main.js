'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div', { preload: preload, create: create, update: update });

var noid, lavaGroup;

function preload() {

    game.load.image('logo', 'assets/images/phaser.png');
    game.load.image('noid', 'assets/images/noid.png');
    game.load.image('lava', 'assets/images/lava.png');

    var name = "steve"
    $.get("http://localhost:5050/name").done(function(data) {
        name = data.name;
        console.log("N: "+name)
    });

}

function create() {

    noid = game.add.sprite(0, 0, 'noid');

    lavaGroup = game.add.group();

    lavaGroup.add(game.add.tileSprite(200, 350, 100, 100, 'lava'));
    lavaGroup.add(game.add.tileSprite(100, 100, 50, 100, 'lava'));

}

function update() {

}