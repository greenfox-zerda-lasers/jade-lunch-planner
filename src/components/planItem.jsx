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
      plan_id: this.props.planId,
      place: this.props.place.trim(),
      time: this.props.time,
    });
  }

  onChange(event) {
    this.setState(Object.assign(this.state, event));
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.actions.fetchUpdatePlan(this.state);
  }

  render() {
    return (
      <div className="plan-box">
        <form
          onSubmit={this.onFormSubmit.bind(this)}
          className="plan-form col-md-12">
          <img className="delete" src={require("../imgs/delete.png")} />
          <button type="submit">Update</button>
          <div className="plan-container">
            <div className="place-box">
              <input
                type="text"
                maxLength="20"
                value={this.state.place}
                onChange={event => this.onChange({place: event.target.value})} />
              <img src={require("../imgs/restaurant.png")} />
            </div>
            <div className="time-box">
              <input
                type="time"
                value={this.state.time}
                onChange={event => this.onChange({time: event.target.value})} />
              <img src={require("../imgs/clock.png")} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}


PlanItem.propTypes = {
  actions: React.PropTypes.object,
  planId: React.PropTypes.any,
  place: React.PropTypes.string,
  time: React.PropTypes.string,
};

const mapStateProps = state => ({
  plans: state.planList.plans
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateProps, mapDispatchToProps)(PlanItem);
