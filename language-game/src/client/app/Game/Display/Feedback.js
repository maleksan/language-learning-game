import React from 'react';
import { Grid, Header, Statistic, Segment, Button } from 'semantic-ui-react';
import { Howl } from 'howler';

class Feedback extends React.Component {
    componentWillMount() {
        const howl = new Howl({
            src: ['./static/audio/tada.mp3']
        });
        if (this.props.digitsCorrect === this.props.currentTask.length) howl.play()
    }
    render() {
        const right = this.props.digitsCorrect === this.props.currentTask.length;
        const color = right ? 'green' : 'red';
        const displayCorrect = this.props.digitsCorrect < 0 ? 0 : this.props.digitsCorrect;
        const msg =  right ? 'Perfect!' : 'Not quite!';
        return (
          <div>
          <Header color={color} textAlign={'center'}> {msg} </Header>
          <Segment>
          <Grid celled='internally' columns={2} divided>
            <Grid.Column stretched>
                <Statistic.Group>
                    <Statistic label='Total Aced'
                        color={color}
                        value={this.props.tasksCorrect} />
                    <Statistic label='Total Exercises'
                        value={this.props.totalTasks}
                    />
                </Statistic.Group>
          </Grid.Column>
          <Grid.Column stretched>
            <p><strong>You entered: </strong>{this.props.userInput}</p>
            <p><strong>Correct answer: </strong>{this.props.currentTask}</p>
            <Button
                size='massive'
                onClick={this.props.handleNextTask}
            > Next question! 加油⛽️</Button>
          </Grid.Column>
          </Grid>
          </Segment>
          </div>
        )
    }
}

export default Feedback;
