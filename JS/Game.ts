//<reference path="../Core/babylon.d.ts" />
import BABYLON from "babylonjs";
import { $id } from './Doc';

export class Game {
    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;
    private _camera: BABYLON.FreeCamera;
    private _light: BABYLON.Light;

    constructor(canvasElement: string) {
        // Create Canvas an Engine
        this._canvas = $id(canvasElement) as HTMLCanvasElement;
        this._engine = new BABYLON.Engine(this._canvas, true);
    }

    createScene(): void {
        // Create a basic BJS Scene object
        this._scene = new BABYLON.Scene(this._engine);
        
    }

    doRender(): void {

    }
}