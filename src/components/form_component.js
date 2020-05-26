import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react"; 
import UserValidation from "../validations/validator"
import {
  FormGroup,
  Col,
  Row,
  Label,
  Input,
  Form,
  Button,
} from "reactstrap";

const renderfield = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { error, touched, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlfor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p stype={{ color: "blue" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      nama: state.users.getUsersDetail.nama,
      alamat: state.users.getUsersDetail.alamat,
      umur: state.users.getUsersDetail.umur,
      telp: state.users.getUsersDetail.telp,
    }
  };
};

class FormComponent extends Component {
  render() {
    return (
      <Form onSubmit= {this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama"
                component={renderfield}
                label="Nama : "
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderfield}
                label="Alamat : "
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="umur"
                component={renderfield}
                label="Umur : "
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="telp"
                component={renderfield}
                label="Nomor Telepon : "
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
