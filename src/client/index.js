import { connect, play } from './networking';
import { downloadAssets } from './assets';
import Constants from '../shared/constants';
import { startRendering, stopRendering } from './render';
/*
import { startCapturingInput, stopCapturingInput } from './input';
import { initState } from './state';
import { setLeaderboardHidden } from './leaderboard';
*/

import './css/main.css';

const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');
const usernameInput = document.getElementById('username-input');

Promise.all([
    connect(),
    downloadAssets(),
]).then(() => {
    playMenu.classList.remove('hidden');
    usernameInput.focus();
    playButton.onclick = () => {
        // Play!
        play(usernameInput.value);
        playMenu.classList.add('hidden');
        //initState();
        //startCapturingInput();
        startRendering();
        //setLeaderboardHidden(false);
    };
});
