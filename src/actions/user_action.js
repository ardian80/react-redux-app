import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const CREATE_USERS = "CREATE_USERS";
export const UPDATE_USERS = "UPDATE_USERS";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/ardian80/react-redux/users")
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "http://my-json-server.typicode.com/ardian80/react-redux/users/" + id
      )
      .then(function (response) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const CreateUser = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://my-json-server.typicode.com/ardian80/react-redux/users",
        data
      )
      .then(function (response) {
        dispatch({
          type: CREATE_USERS,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: CREATE_USERS,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const UpdateUser = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "http://my-json-server.typicode.com/ardian80/react-redux/users/" + id,
        data
      )
      .then(function (response) {
        dispatch({
          type: UPDATE_USERS,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: UPDATE_USERS,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const DeleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "http://my-json-server.typicode.com/ardian80/react-redux/users/" + id
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deteleUsersDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: CREATE_USERS,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
