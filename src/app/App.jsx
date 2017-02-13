import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

import './reset.scss';
import './App.scss';
import SearchPlace from '../components/search_place';
import CurrentPlanList from '../components/current_plans';


class App extends Component {
  render() {
    return (
      <div>
        <SearchPlace {...this.props} />
        <CurrentPlanList {...this.props} />
      </div>
    );
  }
}


export default App;
