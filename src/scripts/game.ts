import 'phaser';
import PreloadScene from './scenes/preloadScene';
import GameConfig = Phaser.Types.Core.GameConfig;
import flyoverScene from './scenes/flyoverScene';
import bugrunScene from './scenes/bugrunScene';
import bugrunTutorialScene from './scenes/bugRunTutorialScene';
import titleScene from './scenes/titleScene';
import endScene from './scenes/endScene';

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 800;



export var gameSettings = {
    playerSpeed: 200,
    totalScore: 0 
}

export var flags = {
    levelsCompleted: 0,
    flyoverTutDone: false,
    bugRunTutDone: false,
    appleTreeDead: false,
    cherryTreeDead: false,
    grapeVineDead: false,
    treeOfHeavenDead: false,
    blackWalnutDead: false,
    latestHost: ""
}

const config: GameConfig = {
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, titleScene, flyoverScene, bugrunScene, bugrunTutorialScene, endScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});


