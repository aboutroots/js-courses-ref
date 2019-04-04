import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 10" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 8" clicked={this.props.onSubtract}  />
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        ctr: state.counter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onAdd: () => dispatch({type: 'ADD'}),
        onSubtract: () => dispatch({type: 'SUBTRACT'}),
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);