import laberinto from "./scenes/laberinto.js";
import nivel_pequeño from "./scenes/nivel_pequeño.js";
import nivel_tres from "./scenes/nivel_tres.js";

const config = {
  type: Phaser.AUTO,
  width: 720,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
   // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [laberinto, nivel_pequeño, nivel_tres],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);