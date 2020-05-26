import React, { Component } from "react";
import TableComponent from "../components/table_component";
import { connect } from "react-redux";
import { getUsersList, deteleUsersDetail } from "../actions/user_action";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deteleUsersDetail());
  }
  render() {
    return <TableComponent />;
  }
}

export default connect()(HomeContainer);
