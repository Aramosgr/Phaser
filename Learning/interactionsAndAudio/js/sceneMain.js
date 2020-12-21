class SceneMain extends Phaser.Scene {
    constructor() {
        // Make sure you pass the class
        super('SceneMain');
    }

    // load images or sounds
    preload()
    {
        this.load.image("face","images/face.png");
        
        // Some devices will need the ogg format
        this.load.audio("cat", ['audio/meow.mp3', 'audio/meow.ogg']);
    }

    // define our objects
    create() {
        this.face = this.add.image(game.config.width/2, game.config.height/2, "face");

        // This will tell Phaser to listen to events from this object
        this.face.setInteractive();
        this.face.on('pointerdown', this.onDown, this);
        this.face.on('pointerup', this.onUp, this);


        this.catSound = this.sound.add('cat');
        this.catSound.play();
    }

    onDown() {
        this.face.alpha = .5;
    }

    onUp() {
        this.face.alpha = 1;
    }

    // constant running loop
    update() {

    }
}