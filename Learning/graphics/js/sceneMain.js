class SceneMain extends Phaser.Scene {
  constructor() {
    // Make sure you pass the class
    super("SceneMain");
  }

  // load images or sounds
  preload() {}

  // define our objects
  // Graphics are built in Phaser graphics
  create() {
    this.graphics = this.add.graphics();

    // Style of the graphic
    this.graphics.lineStyle(8, 0xff0000);

    // From and to, to draw
    this.graphics.moveTo(0, 0);
    this.graphics.lineTo(100, 300);

    // Render the graphic as a line
    this.graphics.strokePath();

    // Creates a reactangle
    this.graphics.strokeRect(100, 200, 50, 50);

    // Creates a circle with no border
    this.graphics.fillStyle(0xff00ff, 0.5);
    this.graphics.fillCircle(200, 400, 60);

    // Creates a circle with no fill
    this.graphics.strokeCircle(200, 400, 60);
  }

  // constant running loop
  update() {}
}
