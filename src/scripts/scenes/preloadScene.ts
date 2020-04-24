export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load_images();
    this.load_spritesheets();
  }

  // Loads all the spritesheets necessary for application 
  load_spritesheets(){
    this.load.spritesheet("player", "./assets/spritesheets/fly-animation2.png", {
        frameWidth: 40,
        frameHeight: 41
      });
    this.load.spritesheet("prayingMantisRight", "./assets/spritesheets/prayingMantisRight.png",{
      frameWidth: 200,
      frameHeight: 200
    });
    this.load.spritesheet("feedSpot","./assets/spritesheets/feedSpot.png",{
      frameWidth: 100,
      frameHeight: 105
    });
    this.load.spritesheet("egg","./assets/spritesheets/egg.png",{
      frameWidth: 22,
      frameHeight: 30
    });
  }

  
  //Loads all the images necessary for application
  load_images(){
    this.load.image("flyoverBackground", "./assets/images/farmBG.jpg");
    this.load.image("bugrunBackground", "./assets/images/treeBark.jpg");
    this.load.image("bottomBounds", "./assets/images/blackBar.png");
    this.load.image("appleTree", "./assets/images/appleTree.png");
    this.load.image("treeTwo", "./assets/images/treeTwo.png");
    this.load.image("messageBox", "./assets/images/messageBox.png");
    this.load.image("closeButton", "./assets/images/closeButton.png");
  }





  create() {
    this.create_spritesheets();
    this.scene.start('flyoverScene');
    //this.scene.start('bugrunScene');
  }


  // Creates all the spritesheets necessary for application
  create_spritesheets(){
    this.anims.create({
      key: "playerFly",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "mantisMoveRight",
      frames: this.anims.generateFrameNumbers("prayingMantisRight", {
        start: 0,
        end: 9
      }),
      frameRate: 20,
      repeat: -1
    });
  }
}
