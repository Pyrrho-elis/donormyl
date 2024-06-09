class Example2 extends Phaser.Scene {
    constructor() {
        super("example2")
    }

    create() {
        this.king = this.add.image(100, 200, "king")
        this.add.text(100, 100, "Idiot", {
            font: '25px',
            fill: "yellow"
        })
    }

    moveCard(card, speed) {
        card.x += speed
    }

    resetCard(card) {
        card.x = 0 - card.width
    }

    update() {
        this.moveCard(this.king, 5)
        if (this.king.x - this.king.width > config.width) {
            this.resetCard(this.king)
        }
    }
}