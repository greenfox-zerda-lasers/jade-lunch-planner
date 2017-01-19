import React, { Component } from 'react';
import logo from './foodlogo.png';
import './test.scss';


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
    this.sendData(this.state.value);
    console.log(`Looking for a restaurant nearby called ${this.state.value}`);
    event.preventDefault();
  }
  sendData(value) {
    return fetch('/add', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: value,
    });
  }

  render() {
    return (
      <article className="input-wrapper">
        <img src={logo} alt="plate img" />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            Restaurant:
            <input id="search" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </article>
    );
  }
}

export default App;
