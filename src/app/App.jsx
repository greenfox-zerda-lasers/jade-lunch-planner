import React, { Component } from 'react';

import Paragraph from '../components/Paragraph';
import './test.scss';


class App extends Component {
  render() {
    return (
      <div>
        <article>
          <h1>A66 Lunch Planner</h1>
        </article>
        <div>
          <Paragraph />
        </div>
      </div>
    )
  }
}

export default App;
