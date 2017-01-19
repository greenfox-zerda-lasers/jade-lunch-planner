import React, { Component } from 'react';


class Paragraph extends Component {
  render() {
    return (
      <div>
        <p>Select a place where you'd like to eat, share it on Slack, let people join on the web interface within a certain time period, and send out finalized information to participants (name of place, time to start, link to directions in gmaps, etc).</p>
        <p>The app can have some kind of admin interface for managing restaurant data, and collect statistics on popular places. It can also make recommendations based on these stats.</p>
      </div>
    );
  }
}

export default Paragraph;
