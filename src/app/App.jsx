import React, { Component } from 'react';
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
    console.log(`Looking for a restaurant nearby called ${this.state.value}`);
    this.sendData(this.state);
    event.preventDefault();
  }
  sendData(values) {
    const data = (values) ? JSON.stringify(values) : null;
    this.state.value = '';
    return fetch('/add', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: data,
    });
  }
  render() {
    return (
      <article className="input-wrapper">
        <div className="titleBox">
          <h1>A66</h1>
          <h2>Lunch Planner</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            <input
              id="search"
              type="text"
              placeholder="search place..."
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <div className="button-wrapper">
            <input type="submit" value="Send" />
          </div>
        </form>
        <div className="printBox">
          <h4>Where is {this.state.value}?</h4>
        </div>
      </article>
    );
  }
}


export default App;
