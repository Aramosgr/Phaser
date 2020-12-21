class Road extends Phaser.GameObjects.Container{
    constructor(config){
        super(config.scene);
        this.scene = config.scene;
        this.back = this.scene.add.image(0,0,"road");
        this.add(this.back);
        this.scene.add.existing(this);

        Align.scaleToGameW(this.back, .5)

        this.setSize(this.back.displayWidth, game.config.height);

        this.lineGroup = this.scene.add.group();

        this.count = 0;
        
        this.car = this.scene.add.sprite(this.displayWidth/4, game.config.height *.9 , "cars");
        Align.scaleToGameW(this.car,.10);
        this.add(this.car);
        
        this.back.setInteractive();
        this.back.on('pointerdown', this.changeLanes.bind(this));

        this.addObject();
        
    }

    addObject() {
        var objs = [
            {key: "pcar1", speed: 13, scale: 10},
            {key: "pcar2", speed: 13, scale: 10},
            {key: "barrier", speed: 20, scale: 8},
            {key: "cone", speed: 20, scale: 5}
        ];
        var index = Math.floor(Math.random() * 4);

        const lane = (Math.random() * 2) > 1 ? this.displayWidth/4: -this.displayWidth/4;
        this.object = this.scene.add.sprite(lane, 0, objs[index].key);
        this.object.speed = objs[index].speed;
        Align.scaleToGameW(this.object,objs[index].scale / 100);
        this.add(this.object);
        
    }

    changeLanes(){
        if(this.car.x > 0){
            this.car.x = - this.displayWidth/4;
        } else {
            this.car.x = this.displayWidth/4;
        }
        
    }

    makeLines() {
        this.vSpace = this.displayHeight / 10;

        for (let i = 0; i < 20; i++) {
            var line = this.scene.add.image(this.x, this.vSpace * i, "line");
            line.oy = line.y;
            this.lineGroup.add(line); 
        }
    }

    moveLines() {
        this.lineGroup.children.iterate(function(child) {
            child.y += this.vSpace / 20;
        }.bind(this));
        this.count++;

        if (this.count == 20) {
            this.count = 0;
            this.lineGroup.children.iterate(function(child) {
                child.y = child.oy;
            }.bind(this));
        }
    }

    moveObject(){
        this.object.y += this.vSpace / this.object.speed;

        if(Collision.checkCollide(this.car, this.object)){
            this.car.alpha= .5;
        } else {
            this.car.alpha= 1;
        }

        if (this.object.y > game.config.height){
            this.object.destroy();
            this.addObject();
            emitter.emit(G.UP_POINTS, 2);
        }
    }
}