import React from 'react';
import {render} from 'react-dom';
import {Container, Menu, Segment, Sidebar, Grid, Button, Header} from 'semantic-ui-react'
import Gunplay from './Gunplay'


export default class Game extends React.Component {

    render () {
        let mainDisplay;

        if (!this.props.hasBegun) {
            mainDisplay = (
                <Segment>
                <p>I'll read off a series of random numbers. Type for me the numbers that you hear.</p>
                <Button size='massive' onClick={this.props.handleStart}>Begin</Button>
                </Segment>
            );
        } else {
            mainDisplay = (<Gunplay {...this.props}/>)
        }

        return (
         <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu}
                animation='push'
                direction='top'
                visible={true} inverted>
            <Menu.Item>
                <Header as='h1' inverted>Mandarin Numbers</Header>
            </Menu.Item>
            </Sidebar>
           <Sidebar.Pusher>
           <Segment basic>
           <Grid centered padded columns={1}>
              <Grid.Column>
                  <Container text >
                      {mainDisplay}
                  </Container>
              </Grid.Column>
            </Grid>
           </Segment>
        </Sidebar.Pusher>
        </Sidebar.Pushable>);
    };
};
