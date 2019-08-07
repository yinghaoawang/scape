import io from 'socket.io-client';

const Constants = require('../shared/constants');
const socket = io(`ws://${window.location.host}`);

const connectedPromise = new Promise(resolve => {
    socket.on('connect', () => {
        console.log('Connected to server!');
        resolve();
    });
});

export const connect = (onGameOver) => {
    return connectedPromise.then(() => {
    });
};

export function play() {
    return 5;
}
