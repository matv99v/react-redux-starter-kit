import React from 'react';

export default class Header extends React.Component {
    state = {
        value: 0
    };

    handlePlusBtn = () => {
        const curState = {...this.state};
        this.setState({
            value: curState.value + 1
        });
    };

    handleMinusBtn = () => {
        const curState = {...this.state};
        this.setState({
            value: curState.value - 1
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.handlePlusBtn}>+</button>
                <button onClick={this.handleMinusBtn}>-</button>
            </div>
        );
    }
}
