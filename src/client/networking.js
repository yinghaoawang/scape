import io from 'socket.io-client';

const Constants = require('../shared/constants');
const socket = io(`ws://${window.location.host}`, { reconnection: false });

const connectedPromise = new Promise(resolve => {
    socket.on('connect', () => {
        console.log('Connected to server!');
        resolve();
    });
});

export const connect = (onGameOver) => {
    return connectedPromise.then(() => {
        // register callbacks
        //socket.on(Constants.MSG_TYPES.GAME_UPDATE, processGameUpdate);
        //socket.on(Constants.MSG_TYPES.GAME_OVER, onGameOver);
        socket.on('disconnect', () => {
            console.log('Disconnected from server.');
        });
    });
};

export function play() {
    return 5;
}
