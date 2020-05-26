import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table dark>
    <tbody>
      <tr>
        <td width="30%">Nama</td>
        <td width="2%">:</td>
        <td>{props.getUsersDetail.nama}</td>
      </tr>
      <tr>
        <td width="30%">Alamat</td>
        <td width="2%">:</td>
        <td>{props.getUsersDetail.alamat}</td>
      </tr>
      <tr>
        <td width="30%">Umur</td>
        <td width="2%">:</td>
        <td>{props.getUsersDetail.umur} </td>
      </tr>
      <tr>
        <td width="30%">Nomor Telepon</td>
        <td width="2%">:</td>
        <td>{props.getUsersDetail.telp}</td>
      </tr>
    </tbody>
  </Table>
  )
};

export default connect(mapStateToProps,null)(DetailUserComponent);
