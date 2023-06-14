import { Howl } from 'howler';
import React from 'react';
import MusicAnimation from './MusicAnimation';

const RATE = {
    HARD: 1.08,
    NORMAL: 1.0,
    EASY: 0.98
};

const WAIT_TIME_MS = 850;

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.rate = RATE[this.props.difficulty];
        this.waitTime = Math.round(WAIT_TIME_MS/this.rate);
        this.sound = new Howl({
          src: ['static/audio/CN.mp3'],
          sprite: {
            1: [250, 350],
            2: [700, 600],
            3: [1410, 700],
            4: [2300, 800],
            5: [3200, 800],
            6: [4100, 750],
            7: [5200, 400],
            8: [5900, 500],
            9: [6800, 600],
            0: [7600, 850],
            silence: [9001, 250]
          },
          rate: this.rate
        });
    }

    _sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    _playTrackName(name) {
        const nameStr = name.toString();
        this.sound.play(nameStr);
    }

    async play() {
        for (let track of this.props.currentTask) {
            this._playTrackName(track);
            await this._sleep(this.waitTime);
        }
        this.props.onFinishedPlaying();
    }

    componentDidMount() {
        this.play();
    }

    render() {
        return (<MusicAnimation
            isPlaying={true}
            waitTime={this.waitTime}
         />)
    }
}

AudioPlayer.defaultProps = {
    difficulty: 'NORMAL',
    currentTask: []
};

export default AudioPlayer;
