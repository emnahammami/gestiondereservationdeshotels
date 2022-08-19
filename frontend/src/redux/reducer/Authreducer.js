import {
  ADD_RESERVATIONS,
  ADD_RESERVE,
  DELETE_RESERVATIONS,
  DELETE_USERS,
  GET_CURRENT,
  GET_RESERVATIONS,
  GET_RESERVE,
  GET_USERS,
  LOGIN,
  LOGOUT,
  REGISTER,UPDATE_RESERVATIONS,UPDATE_USERS,GET_USER, FIND_USER, FIND_RESERVATION, DELETE_RESERVE
} from "../Types/authTypes";

const initialState = {
  users: [],
  user: {},
  errors: [],
  reservations:[],
  reservation:{},
  reserve:[],
  found:{},
  fr:[],
  fu:[]
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.users };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.users };
    case GET_CURRENT:
      return { ...state, user: payload.user };
    case GET_USERS:
      return { ...state, users: payload.userss };
     
      case FIND_USER:
      return { ...state, fu: payload.fu };
      case FIND_RESERVATION:
      return { ...state, fr: payload.fr };
      case GET_RESERVATIONS:
        return { ...state, reservations: payload.r };
        case GET_RESERVE:
          return { ...state, reserve: payload.r };
    case LOGOUT:
      localStorage.removeItem("token");

      return { ...state, user: null };
      case DELETE_USERS:
      return { loading: true };
      case DELETE_RESERVATIONS:
      return { loading: true };
      case DELETE_RESERVE:
        return { loading: true };
      case UPDATE_USERS:
        return { loading: true };
        case UPDATE_RESERVATIONS:
        return { loading: true };
        case ADD_RESERVATIONS:return  { ...state, reservations: payload.reservationss };
        case ADD_RESERVE:return  { ...state, reserve: payload.reservess };
    default:
      return state;
  }
};
export default reducer;