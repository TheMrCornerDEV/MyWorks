var game = new Phaser.Game (800, 600, Phaser.AUTO, 'game'); //Creamos primero el juego como tal


game.state.add('boot', baseState);
game.state.add('menu', startMenu);
game.state.add('load', loadState);


game.state.start('boot');
