import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';
import './reset.scss';
import './App.scss';
import SearchPlace from '../components/searchPlace';
import PlanList from '../components/planList';


class App extends Component {
  componentDidMount() {
    const { fetchPlan } = this.props.actions;
    // fetchPlan();
  }

  render() {
    // const { plans } = this.props.planList;

    const plans = [
      {plan_id:1, place:'Szarvas Bar', time:'12:32', timezone_offset:-60},
      {plan_id:2, place:'Bodza Tatt', time:'12:32', timezone_offset:-60},
      {plan_id:3, place:'Hulla 120 Rt.', time:'12:32', timezone_offset:-60},
    ];

    return (
      <div className="container container-fluid row col-md-12">
        <SearchPlace {...this.props} />
        <PlanList plans={plans} />
      </div>
    );
  }
}


App.propTypes = {
  actions: React.PropTypes.object,
  planList: React.PropTypes.object,
};

const mapStateProps = state => ({
  planList: state.planList
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateProps, mapDispatchToProps)(App);
