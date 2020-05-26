import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/back_component";
import { connect } from "react-redux";
import { getUsersDetail } from "../actions/user_action";
import DetailUserComponent from "../components/detailUser_component";

 class DetailUserContainer extends Component {
   componentDidMount () {
     this.props.dispatch(getUsersDetail(this.props.match.params.id))
   }

  render() {

    
    return (
      <Container>
        <BackComponent />
        <h1> Detail User </h1>
        <DetailUserComponent/>
      </Container>
    );
  }
}

export default connect() (DetailUserContainer)
