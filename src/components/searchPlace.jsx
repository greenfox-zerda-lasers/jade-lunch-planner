import _ from 'lodash';
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

  googlePlacesSearch(keyword) {
    this.props.actions.fetchGooglePlaces(keyword);
  }

  onChange(place) {
    const placeSearch = _.debounce(term => {
      this.googlePlacesSearch(term); }, 1000);

    this.setState({ place });
    placeSearch(place);
  }

  onFormSubmit(event) {
    event.preventDefault();
    // this.props.actions.fetchGooglePlaces();
    // this.props.actions.fetchNewPlan(this.state);
    //
    // this.setState({
    //   place: '',
    //   time: '12:00',
    //   timezone_offset,
    // });
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
              type="text"
              placeholder="Search Place"
              value={this.state.place}
              onChange={event => this.onChange(event.target.value)}
            />
          </label>
          <div className="set-time-wrapper">
            <input
              type="time"
              value={this.state.place}
              onChange={event => this.onChange({place: event.target.value})}
            />
            <button type="submit">Save</button>
          </div>
        </form>
        <GooglePlacesList places={this.props.googlePlacesList.googlePlaces}/>
      </div>
    );
  }
}


SearchPlace.propTypes = {
  actions: React.PropTypes.object,
  googlePlacesList: React.PropTypes.object,
};

const mapStateProps = state => ({
  googlePlacesList: state.googlePlacesList
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateProps, mapDispatchToProps)(SearchPlace);
