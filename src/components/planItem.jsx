import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';
import { timezoneOffset } from '../app/timeValidator';


const timezone_offset = timezoneOffset();


class PlanItem extends Component {
  constructor() {
    super();

    this.state = {
      plan_id: null,
      place: '',
      time: '12:00',
      timezone_offset,
    };
  }

  componentWillMount() {
    this.setState({
      plan_id: this.props.key,
      place: this.props.place.trim(),
      time: this.props.time,
    })
  }

  onChange(event) {
    this.setState(Object.assign(this.state, event));
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.actions.fetchNewPlan(this.state);
  }

  render() {
    return (
      <div className="plan-box">
        <form
          onSubmit={this.onFormSubmit.bind(this)}
          className="col-md-12">
          <div className="place-box">
            <input
              id="location"
              type="text"
              maxLength="20"
              value={this.state.place}
              onChange={event => this.onChange({place: event.target.value})} />
            <img src={require("../imgs/restaurant.png")} />
          </div>
          <div className="time-box">
            <input
              id="setTime"
              type="time"
              value={this.state.time}
              onChange={event => this.onChange({time: event.target.value})} />
            <img src={require("../imgs/clock.png")} />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}


PlanItem.propTypes = {
  actions: React.PropTypes.object,
  plan: React.PropTypes.object,
};

const mapStateProps = state => ({
  plan: state.plan
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateProps, mapDispatchToProps)(PlanItem);
