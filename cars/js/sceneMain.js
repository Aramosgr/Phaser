class SceneMain extends Phaser.Scene {
    constructor() {
        // Make sure you pass the class
        super('SceneMain');
    }

    // load images or sounds
    preload()
    {
    	this.load.image("road", "images/road.jpg");
    	this.load.spritesheet("cars", "images/cars.png", {frameWidth: 60, frameHeight: 126});
    	this.load.image("line", "images/line.png");
    	this.load.image("pcar1", "images/pcar1.png");
    	this.load.image("pcar2", "images/pcar2.png");
    	this.load.image("barrier", "images/barrier.png");
    	this.load.image("cone", "images/cone.png");
    }

    // define our objects
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        model.score = 100;

        this.sb = new ScoreBox({scene: this});
        this.sb.x = game.config.width - 50;
        this.sb.y = 50;

        this.road = new Road({scene: this});
        this.road.x = game.config.width/2;
        this.road.makeLines();

    }

    // constant running loop
    update() {
        this.road.moveLines();
        this.road.moveObject();
    }
}