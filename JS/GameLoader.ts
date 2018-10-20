import { Game } from './Game';

window.addEventListener('DOMContentLoaded', () => {
    // Create the Game using the 'renderCanvas'
    let game = new Game('renderCanvas');

    // Create de Scene
    game.createScene();

    // Start Render loop
    game.doRender();
})