import React from 'react';
import Flag from './Flag.jsx';
import { connect } from 'react-redux';

import {incrementValue} from '../actions/valueActions.js';
import {decrementValue} from '../actions/valueActions.js';

import {addWord} from '../actions/wordsActions.js';
import {deleteWord} from '../actions/wordsActions.js';

@connect(store => {
    return store;
})



export default class App extends React.Component {
    handleIncrement = () => {
        this.props.dispatch(incrementValue(1));
    };

    handleDecrement = () => {
        this.props.dispatch(decrementValue(1));
    };

    handleAddWord = () => {
        this.props.dispatch(addWord(this.refs.targetInput.value));
    };

    handleDelWord = () => {
        this.props.dispatch(deleteWord(this.refs.targetInput.value));
    };

    render() {
        return (
            <div>

                <div style={{backgroundColor: 'mistyrose'}}>
                    {this.props.words.map((el, i) => <h4 key={i}>{el}</h4>)}
                    <input type='text' ref='targetInput'></input>
                    <button onClick={this.handleAddWord}>+word</button>
                    <button onClick={this.handleDelWord}>-word</button>
                </div>

                <div style={{backgroundColor: 'yellow'}}>
                    <h1>{this.props.value}</h1>
                    <button onClick={this.handleIncrement}>+val</button>
                    <button onClick={this.handleDecrement}>-val</button>
                </div>

                <Flag />
            </div>
        );
    }
}
