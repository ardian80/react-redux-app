import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class BackComponent extends Component {
  render() {
    return (
      <Row className="mr-2">
        <Col>
          <Link to="/">
            <Button color="dark">
              <FontAwesomeIcon icon={faArrowLeft} /> Kembali
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }
}
