class Example extends Phaser.Scene {
    constructor() {
        super('example')
    }
    preload() {
        this.load.image("king", "./assets/king-clubs.png");
    }
    create() {
        this.add.text(20, 20, "Disgrace", {
            font: "25px Arial",
            fill: "yellow"
        })
        this.scene.start("example2");
    }
}