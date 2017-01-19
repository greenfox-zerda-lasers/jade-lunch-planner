import React, { Component } from 'react';
import Restaurants from '../components/Restaurants';

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
    console.log(event);
    console.log(`Looking for a restaurant nearby called ${this.state.value}`);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Restaurant:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    );
  }
}

export default App;
