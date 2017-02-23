import _ from 'lodash';
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

  googlePlacesSearch(place) {
    this.props.actions.fetchGooglePlaces(place);
  }

  render() {
    const { plans } = this.props.planList,
          { googlePlaces } = this.props.googlePlacesList;

    const placesSearch = _.debounce(term => { this.googlePlacesSearch(term); }, 600);

    return (
      <div className="container container-fluid row col-md-12">
        <SearchPlace
          googlePlaces={googlePlaces}
          search={placesSearch} />
        <PlanList plans={plans} />
      </div>
    );
  }
}


App.propTypes = {
  actions: React.PropTypes.object,
  planList: React.PropTypes.object,
  googlePlacesList: React.PropTypes.object,
};

const mapStateToProps = state => ({
  planList: state.planList,
  googlePlacesList: state.googlePlacesList,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
