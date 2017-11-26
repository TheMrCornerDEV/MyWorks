var loadState = {
  preload: function(){
    //Loads the images of the Game
    game.load.image('fondo', 'images/Fondo2.jpg'); //Background of the game/scene nº1
    game.load.image('sky', 'images/paisaje-de-flores.jpg');
    console.log('Carga imagen');

    //Calls the next state
    game.state.start('menu');
  }
};
