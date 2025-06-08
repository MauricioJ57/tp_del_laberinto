export default class laberinto extends Phaser.Scene {
    constructor() {
        super("laberintojuego");
    }

    init() {
        this.score = 0;
    }

    preload() {
        this.load.tilemapTiledJSON("mapa_de_laberinto", "public/assets/tilemap/mapa_de_laberinto.json");
        this.load.image("tiles", "public/assets/tilemap_packed.png");
        this.load.image("cuadrado", "public/assets/cuadrado_de_laberinto.png");
    }

    create() {
        const map = this.make.tilemap({ key: "mapa_de_laberinto" });
        const tileset = map.addTilesetImage("tilemap", "tiles");
        const backgroundLayer = map.createLayer("Background", tileset, 0, 0);
        const laberintoLayer = map.createLayer("laberinto", tileset, 0, 0);
        laberintoLayer.setCollisionByProperty({ collides: true });
        const objectsLayer = map.getObjectLayer("Objetos");

        const spawnPoint = objectsLayer.objects.find(obj => obj.name === "spawn1" || obj.name === "spawn" || obj.name === "spawnPoint");

        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "cuadrado");

        //this.player = this.physics.add.sprite(50, 50, "cuadrado");

        this.physics.add.collider(this.player, laberintoLayer);
        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.restart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#fff'
        });
        this.scoreText.setScrollFactor(0);

        this.victoryText = this.add.text(350, 400, "GANASTE", {
            fontSize: '64px',
            fill: '#00ff00'
        }).setOrigin(0.5, 0.5).setVisible(false);

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

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

        if (this.restart.isDown)
            this.scene.start("nivelpequeñojuego");
        } // borrar mas adelante antes de la entrega
        
    }
