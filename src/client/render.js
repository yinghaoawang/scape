import { getAsset } from './assets';
import { getCurrentState } from './state';

const Constants = require('../shared/constants');

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

function render() {
    const { trees } = getCurrentState();

    renderBackground();

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

function renderBackground() {
    context.fillStyle = "#DDDDDD";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

let renderInterval = null;
export function startRendering() {
    renderInterval = setInterval(render, 1000 / 60);
}

export function stopRendering() {
    clearInterval(renderInterval);
}
