import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';
import { timezoneOffset } from '../app/timeValidator';


const timezone_offset = timezoneOffset();


class PlanItem extends Component {
  onChange(event) {
    const { actions, listKey } = this.props;

    actions.updatePlan({ event, listKey });
  }

  onDelete() {
    const { actions, listKey } = this.props;

    actions.fetchDeletePlan(this.props.planId);
    actions.deletePlan(listKey);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const { planId, place, time } = this.props;

    this.props.actions.fetchUpdatePlan({
      plan_id: planId,
      place,
      time,
      timezone_offset
    });
  }

  render() {
    return (
      <div className="plan-box">
        <form
          onSubmit={this.onFormSubmit.bind(this)}
          className="plan-form col-md-12">
          <img
            className="delete"
            src={require("../imgs/delete.png")}
            onClick={event => this.onDelete()}
          />
          <button type="submit">Update</button>
          <div className="plan-container">
            <div className="place-box">
              <input
                type="text"
                maxLength="20"
                value={this.props.place}
                onChange={event => this.onChange({place: event.target.value})} />
              <img src={require("../imgs/restaurant.png")} />
            </div>
            <div className="time-box">
              <input
                type="time"
                value={this.props.time}
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
  listKey: React.PropTypes.any,
  place: React.PropTypes.string,
  planId: React.PropTypes.any,
  time: React.PropTypes.string,
};


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(null, mapDispatchToProps)(PlanItem);
