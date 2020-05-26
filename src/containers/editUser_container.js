import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/back_component";
import { connect } from "react-redux";
import { getUsersDetail, UpdateUser } from "../actions/user_action";
import FormComponent from "../components/form_component";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    postResponseDataUsers: state.users.postResponseDataUsers,
    errorpostResponseDataUsers: state.users.errorpostResponseDataUsers,
  };
};
class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(UpdateUser(data, this.props.match.params.id));
  }
  render() {
    if (
      this.props.postResponseDataUsers ||
      this.props.errorpostResponseDataUsers
    ) {
      if (this.props.errorpostResponseDataUsers) {
        swal("Gagal", this.props.errorpostResponseDataUsers, "error");
      } else {
        swal(
          "Data User Berhasil Di Update!",
          "Nama : " + this.props.postResponseDataUsers.nama,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);
