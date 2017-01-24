import React, { Component } from 'react';
import './reset.scss';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.sendData(this.state);
    event.preventDefault();
  }
  sendData(values) {
    const data = (values) ? JSON.stringify(values) : null;
    this.state.value = '';
    return fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    }).catch((error) => {
      console.error('Request Failed', error);
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
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="setTime">Current Lunch <b>Time</b> is
            <input
              id="setTime"
              type="text"
              placeholder="..."
            />
          </label>
          <span>Edit to update plan</span>
        </form>
      </article>
    );
  }
}


export default App;
