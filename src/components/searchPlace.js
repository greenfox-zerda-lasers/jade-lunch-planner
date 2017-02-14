import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';


class SearchPlace extends Component {
  onChange(event) {
    const { updatePlan, fetchUpdatePlan } = this.props.actions,
          { plan } = this.props;

    updatePlan(event);
    // fetchUpdatePlan(1, plan, tzOffset);
  }
  render() {
    const { title } = this.props;

    return (
      <div className="input-wrapper col-sm-12 col-md-6">
        <form
          onSubmit={this.handleSubmit}
          className="col-md-12">
          <img src={require("../imgs/a66-logo.png")} className="logo"/>
          <label id="location-label" htmlFor="location">Current Lunch <b>Location</b> is
            <input
              id="location"
              type="text"
              placeholder="Sushi Time"
              onChange={event => this.onChange({place: event.target.value})}
            />
          </label>
          <label htmlFor="setTime">Current Lunch <b>Time</b> is
            <input
              id="setTime"
              type="time"
              placeholder="00:00"
              onChange={event => this.onChange({time: event.target.value})}
            />
          </label>
          <span>Edit to update plan</span>
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
