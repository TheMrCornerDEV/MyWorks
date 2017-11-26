var game = new Phaser.Game (800, 600, Phaser.AUTO, 'game',{preload: preload, create: create, update: update}); //Creamos primero el juego como tal


game.state.add('boot', baseState);
