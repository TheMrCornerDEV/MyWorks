var startMenu = {
  //Atributes
  level: 0,

  //Charges the necessary sprites for this state
  preload: function(){
    //Background
    this.load.image('sky', 'images/paisaje-de-flores.jpg');
    //Button image
    this.load.image('button1', 'images/Button2.png');
  },

  //Functions
  create: function(){
    this.add.sprite(0, 0, 'sky');
    this.add.button(350, 310, 'button1', this.chooseLevel(), this, 2, 1, 0);
    this.add.text(150, 150, 'Introduction to Phaser', {font: '60px TimesNewRoman', fill: '#FFF'});
    //game.add.image(0,0, 'sky');
    this.chooseLevel();
  },

  chooseLevel: function (){
    console.log("Iniciamos el juego VAYA");
    /*switch (this.level){
      case 0:
        //game.state.end();
        break;
      case 1:
        game.state.start();
        break;
      case 2:
        game.state.start();
        break;
    }*/
  }
};
