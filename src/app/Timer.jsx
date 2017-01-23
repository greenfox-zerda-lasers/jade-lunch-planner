import 'rc-time-picker/assets/index.css'
import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
const showSecond = false;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';


function onChange(value) {
  console.log(value && value.format(str));
}

class Timer extends Component {
  render() {
    return (
      <aside>
        <TimePicker
          style={{ width: 100 }}
          showSecond={showSecond}
          defaultValue={moment()}
          className="xxx"
          onChange={onChange}
        />
      </aside>
    );
  }
}

export default Timer;
