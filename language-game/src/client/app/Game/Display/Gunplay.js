import React from 'react';
import { Icon, Segment, Divider, Input, Form } from 'semantic-ui-react';
import AudioPlayer from './AudioPlayer';
import Feedback from './Feedback';

class Gunplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainInput: ' '
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.handleGrading(this.state.mainInput);
    }

    handleOnChange(e) {
        e.preventDefault();
        let text = e.target.value;
        this.setState({mainInput: text});
    }

    render () {
        let audioPlayer, submissionForm, feedback;
        if (this.props.audioShouldPlay) {
            audioPlayer = (
                <AudioPlayer
                    currentTask={this.props.currentTask}
                    onFinishedPlaying={this.props.handleFinishedPlaying}
                />
            );

        } else {
            submissionForm = (
            <Segment padded>
            <Form size='massive'
                name='main'
                onSubmit={this.onSubmit}>
                <Form.Field
                    name='charlie'
                    onChange={this.handleOnChange}
                    icon='write'
                    control='input'
                    value={this.state.value}
                    label='Type the numbers that you heard and press enter'
                />
            </Form>
            </Segment>
            );
        }
        if (this.props.shouldDisplayFeedback) {
            audioPlayer, submissionForm= null;
            feedback = <Feedback {...this.props}/>
        }
        return (
            <div>
                {audioPlayer}
                {submissionForm}
                {feedback}
            </div>
        );
    }
}

export default Gunplay;
