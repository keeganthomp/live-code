import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showMessage } from "../actions";

class HomePage extends Component {
  render() {
    return (
      <div className="">
        <h1>This is the home page</h1>
        <button onClick={() => this.props.clickMe()}>Click Me</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickMe: showMessage }, dispatch);
}

function mapStateToProps(state) {
  return { yay: state.yay };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
