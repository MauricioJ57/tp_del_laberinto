export default class laberinto extends Phaser.Scene {
    constructor() {
        super("laberinto");
    }

    init() {
    }

    preload() {
        this.load.tilemapTiledJSON("mapa de laberinto", "public/tilemap/mapa de laberinto.json");
        this.load.image("porciones de terreno", "public/assets/porciones de terreno.png");
        this.load.image("nave", "public/assets/boceto nave 1.png");
    }

    create() {
        const map = this.make.tilemap({ key: "mapa de laberinto" });

        const tileset = map.addTilesetImage("porciones de terreno", "porciones de terreno");

        const belowLayer = map.createLayer("Capa de patrones 1", tileset, 0, 0);
        const platformLayer = map.createLayer("caja de laberinto", tileset, 0, -50);

        this.player = this.physics.add.sprite(400, 400, "nave");
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        platformLayer.setCollisionByProperty({ esColisionable: true });
        this.physics.add.collider(this.player, platformLayer);
    }

    update() {

    }
} 