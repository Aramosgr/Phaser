let game;
window.onload = function() {
    /**
     * This config value has the basics. Type auto will let the browser decide how to run the game (Canvas, webgl..)
     * The parent is the id of the div where the game will wun
     * Every game needs at least 1 scene (title screen, main game, credits...)
     */ 
    const config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        scene: [SceneMain]
    };

    // Initializes the game
    game = new Phaser.Game(config);
}