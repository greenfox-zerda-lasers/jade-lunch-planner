import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import moment from 'moment';

class Timer extends Component {
  getInitalState() {
    return {
      value: moment(),
    };
  }
  handleValueChange(value) {
    console.log(value && value.format('HH:mm'));
    this.setState({ value });
  }
  clear() {
    this.setState({
      value: undefined,
    });
  }
  render() {
    return (
      <aside>
        <TimePicker
          defaultValue={this.state.value}
          onChange={this.handleValueChange}
        />
      </aside>
    );
  }
}

export default Timer;
