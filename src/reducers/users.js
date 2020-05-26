import { GET_USERS_LIST, GET_USERS_DETAIL, CREATE_USERS, UPDATE_USERS } from "../actions/user_action";

let initialState = {
  title: "XSIS Academy",
  getUsersList: false,
  errorUsersList: false,
  getUsersDetail: false,
  errorUsersDetail: false,
  postResponseDataUsers: false,
  errorpostResponseDataUsers: false,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage,
      };

      case CREATE_USERS:
      return {
        ...state,
        postResponseDataUsers: action.payload.data,
        errorpostResponseDataUsers: action.payload.errorMessage,
      };
      case UPDATE_USERS:
        return {
          ...state,
          postResponseDataUsers: action.payload.data,
          errorpostResponseDataUsers: action.payload.errorMessage,
        };
    default:
      return state;
  }
};

export default users;
