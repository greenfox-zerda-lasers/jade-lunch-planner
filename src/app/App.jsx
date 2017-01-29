import React, { Component } from 'react';
import validateHhMm from './time_validator';
import './reset.scss';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      time: '00:00',
    };
  }
  componentDidUpdate() {
    const timestamp = validateHhMm(this.state.time);
    const plan_id = 1;
    return fetch(`/api/plans/${plan_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: this.state.value,
        time: timestamp,
      })
    }).catch((error) => {
      console.error('Request Failed', error);
    });
  }
  handleChange(event) {
    const location =  event.target.id === 'location' ?
    event.target.value : this.state.value;
    const time = event.target.id === 'setTime' ?
    event.target.value : this.state.time;
    this.setState({
      value: location,
      time: time,
    });
  }
  render() {
    return (
      <article className="input-wrapper">
        <form onSubmit={this.handleSubmit}>
          <img src={require('../imgs/a66-logo.png')} className="logo"/>
          <h1>LUNCH</h1>
          <label id="location-label" htmlFor="location">Current Lunch <b>Location</b> is
            <input
              id="location"
              type="text"
              placeholder="..."
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <label htmlFor="setTime">Current Lunch <b>Time</b> is
            <input
              id="setTime"
              type="time"
              placeholder="12:00"
              value={this.state.time}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <span>Edit to update plan</span>
        </form>
      </article>
    );
  }
}


export default App;
