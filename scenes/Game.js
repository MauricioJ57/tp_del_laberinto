export default class Game extends Phaser.Scene {
    constructor() {
        super("game");
    }

    init() {
    }

    preload() {
        this.load.tilemapTiledJSON("mapa de laberinto", "public/tilemap/mapa de laberinto.json");
        this.load.image("porciones de terreno", "public/assets/porciones de terreno.png");
        this.load.image("naves", "public/assets/navesjugables.png")
    }

    create() {

    }

    update() {

    }
} 