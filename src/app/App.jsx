import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

import './reset.scss';
import './App.scss';


const validator = require('./time_validator');


class App extends Component {
  componentWillMount() {
    const { fetchPlan } = this.props.actions;
    fetchPlan(1);
  }

  componentDidUpdate() {
    const { updatePlan } = this.props.actions;
  }

  onChange(event) {
    const { updatePlan } = this.props.actions;
    updatePlan(event);
  }

  render() {
    const { title } = this.props,
          { place, time } = this.props.plan,
          { updatePlan } = this.props.actions;

    return (
      <article className="input-wrapper">
        <form onSubmit={this.handleSubmit}>
          <img src={require("../imgs/a66-logo.png")} className="logo"/>
          <h1>{title}</h1>
          <label id="location-label" htmlFor="location">Current Lunch <b>Location</b> is
            <input
              id="location"
              type="text"
              placeholder="..."
              value={place}
              onChange={event => this.onChange({place: event.target.value})}
            />
          </label>
          <label htmlFor="setTime">Current Lunch <b>Time</b> is
            <input
              id="setTime"
              type="time"
              placeholder="00:00"
              value={time}
              onChange={event => this.onChange({time: event.target.value})}
            />
          </label>
          <span>Edit to update plan</span>
        </form>
      </article>
    );
  }
}


App.propTypes = {
  actions: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  plan: React.PropTypes.object,
};


const mapStateProps = state => ({
  plan: state.plan
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateProps, mapDispatchToProps)(App);
