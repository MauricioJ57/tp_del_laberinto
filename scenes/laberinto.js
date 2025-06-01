export default class laberinto extends Phaser.Scene {
    constructor() {
        super("laberinto");
    }

    init() {
    }

    preload() {
        this.load.tilemapTiledJSON
        this.load.image("nave", "public/assets/boceto nave 1.png");
    }

    create() {

        this.player = this.physics.add.sprite(400, 400, "nave");
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, platformLayer);
    }

    update() {

    }
} 