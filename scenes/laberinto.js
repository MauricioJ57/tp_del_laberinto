export default class laberinto extends Phaser.Scene {
    constructor() {
        super("laberintojuego");
    }

    init() {
    }

    preload() {
        this.load.tilemapTiledJSON("mapa_de_laberinto", "public/assets/tilemap/mapa_de_laberinto.json");
        this.load.image("background", "public/assets/tilemap-backgrounds.png");
        this.load.image("tiles", "public/assets/tilemap_packed.png");
        this.load.image("cuadrado", "public/assets/cuadrado_de_laberinto.png");
    }

    create() {
        const map = this.make.tilemap({ key: "mapa_de_laberinto" });
        const tileset = map.addTilesetImage("laberinto", "background","decoraciones");
        const laberintoLayer = map.createLayer("laberinto", tileset, 0, 0);

        this.player = this.physics.add.sprite(50, 50, "cuadrado");
        
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {

    }
} 