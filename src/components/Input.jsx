import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/';


const Input = (props) => (
  <input id={props.id}
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={(event) => props.onPlanChange({[props.planKey]: event.target.value})}
  />
);


Input.propTypes = {
  id: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.any,
  planKey: React.PropTypes.string.isRequired,
  onPlanChange: React.PropTypes.func.isRequired,
};


export default Input;
