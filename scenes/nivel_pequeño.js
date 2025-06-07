export default class nivel_pequeño extends Phaser.Scene {
    constructor() {
        super("nivelpequeñojuego");
    }

    init () {

    }

    preload() {
        this.load.tilemapTiledJSON("nivel_pequeño", "public/assets/tilemap/nivel_pequeño.json");
        this.load.image("tiles", "public/assets/tilemap_packed.png");
    }

    create() {
        const map = this.make.tilemap({ key: "nivel_pequeño" })
        const tileset = map.addTilesetImage("tilemap_packed", "tiles");
        const fondoLayer = map.createLayer("fondo", tileset, 0, 0);
        const capasLayer = map.createLayer("capas", tileset, 0, 0);
        capasLayer.setCollisionByProperty({ colisionable: true });

        this.player = this.physics.add.sprite(50, 50, "cuadrado");
        this.physics.add.collider(this.player, capasLayer);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.restart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160);
        } else {
            this.player.setVelocityY(0);
        }

    }
}