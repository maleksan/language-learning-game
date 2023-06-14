import React from 'react';
import {render} from 'react-dom';

import GameContainer from './Game/GameContainer';
import {Grid, Header, Container} from 'semantic-ui-react'

export default class App extends React.Component {
    render () {
        return (
            <div>
                <GameContainer />
            </div>
        );
    }
}
