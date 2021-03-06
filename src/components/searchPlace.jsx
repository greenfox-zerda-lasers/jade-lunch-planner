import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';
import { timezoneOffset } from '../app/timeValidator';
import GooglePlacesList from './googlePlacesList';


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

    if(event.place) {
      this.props.search(event.place);
    }
  }

  setPlace(place) {
    this.setState({ place });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.actions.fetchNewPlan(this.state);

    this.setState({
      place: '',
      time: '12:00',
    });
  }

  render() {
    return (
      <div className="input-wrapper col-md-6">
        <img
          className="logo"
          src={require("../imgs/a66-logo.png")}
        />
        <form
          onSubmit={this.onFormSubmit.bind(this)}
          className="col-md-12">
          <label id="location-label" htmlFor="location">Current Lunch <b>Location</b> is
            <input
              type="text"
              placeholder="Search Place"
              value={this.state.place}
              onChange={event => this.onChange({place: event.target.value})}
            />
          </label>
          <div className="set-time-wrapper">
            <input
              type="time"
              value={this.state.time}
              onChange={event => this.onChange({time: event.target.value})}
            />
            <button type="submit">Save</button>
          </div>
          <GooglePlacesList
            places={this.props.googlePlaces}
            setPlace={this.setPlace.bind(this)} />
        </form>
      </div>
    );
  }
}


SearchPlace.propTypes = {
  actions: React.PropTypes.object,
  search: React.PropTypes.func,
  googlePlaces: React.PropTypes.any,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(null, mapDispatchToProps)(SearchPlace);
