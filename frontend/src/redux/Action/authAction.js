import axios from "axios";
import {
  FAIL,
  GET_CURRENT,

  LOGIN,
  LOGOUT,
  REGISTER,
  GET_USERS,DELETE_USERS, UPDATE_USERS, ADD_RESERVATIONS,GET_RESERVATIONS, DELETE_RESERVATIONS,UPDATE_RESERVATIONS, ADD_RESERVE,GET_RESERVE, FIND_USER, FIND_RESERVATION, DELETE_RESERVE
} from "../Types/authTypes";
import { alert_error } from "./errorActions";

export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/users/register", data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/login");
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", data);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/profile");
    window.location.reload();
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_error(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/users/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const getusers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users/all");
    console.log(res.data);
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const getreservations = () => async (dispatch) => {
  try {
    const res = await axios.get("/reservation/all");
    console.log(res.data);
    dispatch({ type: GET_RESERVATIONS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteusers = (id) => async (dispatch,navigate) => {
  try {
    const res = await axios.delete(`/users/delete/${id}`);
    console.log(res.data);
    dispatch({ type: DELETE_USERS, payload: res.data });
    navigate("/profile");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
export const finduserbyid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/users/find/${id}`);
    console.log(res.data);
    dispatch({ type: FIND_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};


export const findreservationbyid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/reservation/find/${id}`);
    console.log(res.data);
    dispatch({ type: FIND_RESERVATION, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};



export const deletereservations = (id) => async (dispatch,navigate) => {
  try {
    const res = await axios.delete(`/reservation/delete/${id}`);
    console.log(res.data);
    dispatch({ type: DELETE_RESERVATIONS, payload: res.data });
    navigate("/updateoffer");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const deletereserve = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/reserve/delete/${id}`);
    console.log(res.data);
    dispatch({ type: DELETE_RESERVE, payload: res.data });
    
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const updateusers = (id,data) => async (dispatch) => {
  try {
    const res = await axios.put(`/users/edit/${id}`,data);
    dispatch({ type:UPDATE_USERS, payload: res.data });
  
    window.location.reload();
  } catch (error) {
   console.log(error)
   
  }
};








export const updatereservations = (id,data) => async (dispatch) => {
  try {
    const res = await axios.put(`/reservation/edit/${id}`,data);
    dispatch({ type:UPDATE_RESERVATIONS, payload: res.data });
  
    window.location.reload();
  } catch (error) {
   console.log(error)
   
  }
};
export const addreservations = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/reservation/Add",data);
    dispatch({ type:ADD_RESERVATIONS, payload: res.data });
  
    window.location.reload();
    console.log("added"+res)
  } catch (error) {
   console.log(error)
   
  }
};


export const addreserve = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/reserve/Add",data);
    dispatch({ type:ADD_RESERVE, payload: res.data });
  
    window.location.reload();
    console.log("added"+res)
  } catch (error) {
   console.log(error)
   
  }
};

export const getreserve = () => async (dispatch) => {
  try {
    const res = await axios.get("/reserve/all");
    console.log(res.data);
    dispatch({ type: GET_RESERVE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};



export const logout = () => {  window.location.reload();
  return { type: LOGOUT };
  
};

