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
    fetchPlan();
  }

  render() {
    const { plans } = this.props.planList;

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

export const app = App;
export default connect(mapStateProps, mapDispatchToProps)(App);
