import React from 'react';
import { connect } from 'react-redux';

import {changeColor} from '../actions/colorActions.js';


@connect(store => {
    return store;
})



export default class Flag extends React.Component {
    state = { i: 0 };

    handleChangeColor = () => {
        this.setState({i: ++this.state.i});
        this.props.dispatch(changeColor(this.state.i));
    };

    render() {
        return (
            <div style={{backgroundColor: this.props.color}}
                 onClick={this.handleChangeColor}>
                Hello from flag!
            </div>
        );
    }
}
