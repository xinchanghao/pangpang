import React from 'react';
import BaseComponent from 'utils/BaseComponent.jsx'
import { connect } from 'react-redux';

class HomeSon extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(222);
    return (
      <div>
        <p>{this.props.addSonResult.getIn(['data'])}</p>
        <p>{this.props.num.getIn(['data'])}</p>
        <p>{this.props.num.getIn(['twonum'])}</p>
      </div>
    )

  }
}

export default connect((state) => {
  return {
    addSonResult: state.getIn(['HomeSonReducer'])
  }
})(HomeSon)