export default class nivel_pequeño extends Phaser.Scene {
    constructor() {
        super("nivelpequeñojuego");
    }

    init (data) {
        this.score = data.score || 0;
        this.collectedStars = 0;
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
        capasLayer.setCollisionByProperty({ collides: true });

        const objects2Layer = map.getObjectLayer("objetos2");

        const spawnPoint = objects2Layer.objects.find(obj => obj.name === "spawn2" || obj.name === "spawn2" || obj.name === "spawnPoint2");

        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "cuadrado");

        this.estrella = this.physics.add.group()
        this.meta = this.physics.add.group();

        objects2Layer.objects.forEach((objData) => {
            const { x = 0, y = 0, type, name } = objData;
            if (type === "estrella" || name === "estrella") {
                const estrella = this.estrella.create(x, y, "estrella");
            }
            if (type === "meta" || name === "meta") {
                const meta = this.meta.create(x, y, "meta");
            }
        })

        this.physics.add.collider(this.player, capasLayer);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.restart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        this.scoreText = this.add.text(16, 16, 'Score: ' + this.score, {
            fontSize: '32px',
            fill: '#fff'
        });
        this.scoreText.setScrollFactor(0);

         this.collectedStarsText = this.add.text(16, 50, 'Estrellas: ' + this.collectedStars, {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0, 0).setScrollFactor(0);


        this.victoryText = this.add.text(350, 400, "GANASTE", {
            fontSize: '64px',
            fill: '#00ff00'
        }).setOrigin(0.5, 0.5).setVisible(false);

        this.unlockMetaText = this.add.text(16, 80, "¡Se desbloqueo la meta!",{
            fontSize: '25px',
            fill: '#fff'
        }).setOrigin(0, 0).setScrollFactor(0).setVisible(false);

        this.collectedStars = 0; 
        this.requiredStars = 5; 
        this.metaBloqueada = true;

        this.physics.add.overlap(this.player, this.estrella, (player, estrella) => {
            estrella.destroy();
            this.score += 10;
            this.collectedStars += 1;
            this.scoreText.setText('Score: ' + this.score);
            this.collectedStarsText.setText('Estrellas: ' + this.collectedStars);
            if (this.collectedStars >= this.requiredStars) {
                this.metaBloqueada = false;
                this.unlockMetaText.setVisible(true);
            }
        });

        this.physics.add.overlap(this.player, this.meta, (player, meta) => {
            if (!this.metaBloqueada) {
                this.scene.start("niveltresjuego", { score: this.score });
            } 
        });

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-250);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(250);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-250);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(250);
        } else {
            this.player.setVelocityY(0);
        }
        
        if (this.restart.isDown) {
            this.scene.restart("laberintojuego");
        }


    }
}