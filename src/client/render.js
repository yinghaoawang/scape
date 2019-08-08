import { getAsset } from './assets';
import { getCurrentState } from './state';

const Constants = require('../shared/constants');

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function render() {
    const { trees } = getCurrentState();

    trees.forEach(renderTree);
}

function renderTree(tree) {
    const { x, y, width, height } = tree;
    context.drawImage(
        getAsset('tree.png'),
        x,
        y,
        width,
        height,
    );
}

let renderInterval = null;
export function startRendering() {
    renderInterval = setInterval(render, 1000 / 60);
}

export function stopRendering() {
    clearInterval(renderInterval);
}
