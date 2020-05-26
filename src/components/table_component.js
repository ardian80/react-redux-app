import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { DeleteUser } from "../actions/user_action";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Apa anda yakin ingin menghapus data ini?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(DeleteUser(id));
      swal("Data berhasil dihapus!", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus!");
    }
  });
};

const columns = [
  {
    dataField: "id",
    text: " ID",
    sort: "true",
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: "true",
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: "true",
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "umur",
    text: " Umur",
    sort: "true",
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "telp",
    text: " Nomor Telepon",
    sort: "true",
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "link",
    text: "Action",
    headerStyle: () => {
      return { width: "35%" };
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>

          <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>

          <Button
            color="dark"
            className="mr-2"
            onClick={() => handleClick(row.id)}
          >
            <FontAwesomeIcon icon={faTrash} /> Hapus
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    erroUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: " ID",
      sort: "true",
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: "true",
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: "true",
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "umur",
      text: " Umur",
      sort: "true",
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "telp",
      text: " Nomor Telepon",
      sort: "true",
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "35%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

              <Button
                color="dark"
                className="mr-2"
                onClick={() => handleClick(props.dispatch, row.id)}
              >
                <FontAwesomeIcon icon={faTrash} /> Hapus
              </Button>
          </div>
        );
      },
    },
  ];
  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faInfo} /> Tambah
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar
                      {...props.searchProps}
                      placeholder="search...."
                    />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.erroUsersList ? (
            <h1>{props.erroUsersList}</h1>
          ) : (
            <Spinner color="warning" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
