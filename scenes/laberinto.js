export default class laberinto extends Phaser.Scene {
    constructor() {
        super("laberinto");
    }

    init() {
    }

    preload() {
        this.load.tilemapTiledJSON
        this.load.image
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {

    }
} 