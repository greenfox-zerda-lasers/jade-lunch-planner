import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';
import { timezoneOffset } from '../app/timeValidator';


const timezone_offset = timezoneOffset();


class SearchPlace extends Component {
  constructor() {
    super();

    this.state = {
      place: '',
      time: '12:00',
      timezone_offset,
    };
  }

  onChange(event) {
    this.setState(Object.assign(this.state, event));
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.actions.fetchNewPlan(this.state);

    this.setState({
      place: '',
      time: '12:00',
      timezone_offset,
    });
  }

  render() {
    return (
      <div className="input-wrapper col-sm-12 col-md-6">
        <form
          onSubmit={this.onFormSubmit.bind(this)}
          className="col-md-12">
          <img src={require("../imgs/a66-logo.png")} className="logo"/>
          <label id="location-label" htmlFor="location">Current Lunch <b>Location</b> is
            <input
              id="location"
              type="text"
              placeholder="Sushi Time"
              value={this.state.place}
              onChange={event => this.onChange({place: event.target.value})}
            />
          </label>
          <label htmlFor="setTime">Current Lunch <b>Time</b> is
            <input
              id="setTime"
              type="time"
              value={this.state.time}
              onChange={event => this.onChange({time: event.target.value})}
            />
          </label>
          <span>Edit to update plan</span>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}


SearchPlace.propTypes = {
  actions: React.PropTypes.object,
  title: React.PropTypes.string,
  plan: React.PropTypes.object,
};

const mapStateProps = state => ({
  plan: state.plan
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateProps, mapDispatchToProps)(SearchPlace);
