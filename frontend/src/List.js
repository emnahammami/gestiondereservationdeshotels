import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { findreservationbyid, finduserbyid, finduserbyidinreserve, getusers } from './redux/Action/authAction';
import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import { findreservationbyidinreserve } from './redux/Action/authAction';
import { Card } from 'react-bootstrap';
export default function List(props) {
 
    
    const dispatch = useDispatch();
    useEffect(() => {
     
  dispatch(finduserbyid(props.el.user)) 
 dispatch(findreservationbyid(props.el.reservations)) 
     
    }, [dispatch]);

    const fu= useSelector((state) => state.Authreducer.fu);
    const fr= useSelector((state) => state.Authreducer.fr);
    console.log("found"+fu?.name+fr?.nomhotel)

  return (
    <>
    <Alert  variant="danger">
    
      <Alert.Heading>user </Alert.Heading>
      <Alert.Heading>reservation {fr.nomhotel}</Alert.Heading>
    
      <hr />

      <div className="d-flex justify-content-end">
        <Button  variant="primary">
         approuver
        </Button>
        <Button  variant="danger">
          annuler 
        </Button>
      </div>
    </Alert>

  </>
  )
}
