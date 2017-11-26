var baseState = { //Base state or boot state
  debug: true,
  create: function(){

    //Charges the physiscs before the game starts
    game.physics.startSystem(Phaser.Physics.ARCADE);

    if (this.debug){
      console.log('Se inicia phaser correctamente!'); //Debug only
    }
    //Calls next state of the game, loading things
    game.state.start('load');
  }
};
