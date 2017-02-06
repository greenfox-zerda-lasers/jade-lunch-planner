import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

import './reset.scss';
import './App.scss';


// const validator = require('./time_validator');


class App extends Component {
  // componentWillMount() {
  //   const plan_id = 1;
  //   return fetch(`/api/plans/${plan_id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: null,
  //   })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((plan) => {
  //     this.setState({
  //       place: plan.place.trim(),
  //       time: validator.toLocalTime(plan.time),
  //     });
  //   })
  //   .catch((error) => {
  //     console.log('Request Failed', error);
  //   });
  // }
  // componentDidUpdate() {
  //   const plan_id = 1;
  //   return fetch(`/api/plans/${plan_id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       place: this.state.place,
  //       time: validator.toUTS(this.state.time),
  //     })
  //   }).catch((error) => {
  //     console.error('Request Failed', error);
  //   });
  // }
  // handleChange(event) {
  //   console.log(event.props.plan);
  // }

  render() {
    const { title } = this.props;
    const { updatePlan } = this.props.actions;
    return (
      <article className="input-wrapper">
        <form onSubmit={this.handleSubmit}>
          <img src={require('../imgs/a66-logo.png')} className="logo"/>
          <h1>{title}</h1>
          <label id="location-label" htmlFor="location">Current Lunch <b>Location</b> is
            <input
              id="location"
              type="text"
              placeholder="..."
              value={updatePlan.place}
              onChange={(event) => updatePlan({place: event.target.value})}
            />
          </label>
          <label htmlFor="setTime">Current Lunch <b>Time</b> is
            <input
              id="setTime"
              type="time"
              placeholder="00:00"
              value={updatePlan.time}
              onChange={(event) => updatePlan({time: event.target.value})}
            />
          </label>
          <span>Edit to update plan</span>
        </form>
      </article>
    );
  }
}


App.propTypes = {
  actions: React.PropTypes.func,
  title: React.PropTypes.string.isRequired
};



const mapStateProps = state => ({
  plan: state.plan
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateProps, mapDispatchToProps)(App);
