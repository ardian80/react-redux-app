import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/back_component";
import FormComponent from "../components/form_component";
import { connect } from "react-redux";
import { CreateUser } from "../actions/user_action";
import swal from 'sweetalert';

const mapStateToProps = (state) => {
  return {
    postResponseDataUsers: state.users.postResponseDataUsers,
    errorpostResponseDataUsers: state.users.errorpostResponseDataUsers,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(CreateUser(data));
  }
  render() {
    if (this.props.postResponseDataUsers || this.props.errorpostResponseDataUsers) {
      if (this.props.errorpostResponseDataUsers){
        swal("Gagal", this.props.errorpostResponseDataUsers, "error");
    }
    else {
      swal("User Berhasil Di Buat!", "Nama : " + this.props.postResponseDataUsers.nama, "success");
    }
  }
    return (
      <Container>
        <BackComponent />
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}
export default connect(mapStateToProps,null )(CreateUserContainer);
