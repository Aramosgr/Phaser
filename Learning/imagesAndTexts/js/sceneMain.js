class SceneMain extends Phaser.Scene {
  constructor() {
    // Make sure you pass the class
    super("SceneMain");
  }

  // load images or sounds
  // the frame will cut the sprite into pieces
  preload() {
    this.load.spritesheet("boy", "images/boy.png", {
      frameWidth: 120,
      frameHeight: 200,
    });
  }

  // define our objects
  create() {

    // Renders a text in the middle
    this.text1 = this.add.text(game.config.width/2, game.config.height/2, "OHAYO!!", {fontFamily: "Anton", color: '#FF0000', fontSize: "40px" });

    // Sets the anchor of the text in the center, to align it
    this.text1.setOrigin(0.5, 0.5);

    // Creates an instance with the image in position 0,0
    this.char = this.add.sprite(0, 0, "boy");

    // function automatically split the sprite into images
    var frameNames = this.anims.generateFrameNumbers("boy");

    // Creates the animation
    // Repeat -1 means forever, frameRate is the speed
    this.anims.create({
      key: "walk",
      frames: frameNames,
      frameRate: 5,
      repeat: -1,
    });

    // Plays the animation
    this.char.play("walk");
    this.doWalk();
  }

  /**
   * Tweens animates changes for an object properties
   * In this example, char will go to X and Y with an alpha of 0 in 5 seconds
   * onComplete is a function binded to this. The reason of calling the callback with bind 
   * is to allow the function to use anything from the parent scope, like doWalk
   */
  doWalk() {
    this.tweens.add({
      targets: this.char,
      duration: 5000,
      x: game.config.width,
      y: game.config.height,
      alpha: 0,
      onComplete: this.onCompleteHandler.bind(this)
    });
  }
  
  // You could use targets to get the object to animate, or use the parent scope like this example
  onCompleteHandler(tween, targets, custom) {
    this.char.x = 0;
    this.char.y = 0;
    this.char.alpha = 1;
    this.doWalk();
  }
  // constant running loop
  update() {}
}
