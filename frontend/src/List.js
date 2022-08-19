import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { deletereserve, findreservationbyid, finduserbyid, finduserbyidinreserve, getusers } from './redux/Action/authAction';
import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import { findreservationbyidinreserve } from './redux/Action/authAction';
import { Card } from 'react-bootstrap';
export default function List(props) {

  const handleClick = (e) => {
    e.preventDefault();
   dispatch(deletereserve(props.el._id))
  
  };
    const dispatch = useDispatch();
    useEffect(() => {
     
  dispatch(finduserbyid(props.el.user)) 
 dispatch(findreservationbyid(props.el.reservations)) 
     
    }, [dispatch]);

    const fu= useSelector((state) => state.Authreducer.fu);
    const fr= useSelector((state) => state.Authreducer.fr);
    console.log("found"+fu)

  return (
    <>
    <Alert  variant="danger">
    
      <Alert.Heading>user {props.el.name}</Alert.Heading>
      <Alert.Heading>reservation {props.el.nomhotel}</Alert.Heading>
    
      <hr />

      <div className="d-flex justify-content-end">
      
        <Button  variant="danger" onClick={handleClick}>
          annuler 
        </Button>
      </div>
    </Alert>

  </>
  )
}
