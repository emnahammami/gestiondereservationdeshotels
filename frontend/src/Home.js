import React from 'react'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getreservations } from "./redux/Action/authAction";
import Listofferhome from "./listofferhome";
export default function Updateoffer() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getreservations());
  }, []);
  
  const reservations = useSelector((state) => state.Authreducer.reservations);
  console.log("lu"+reservations)
  return (
    <div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {reservations?.map((el) => (
        <div key={el._id}>
          <Listofferhome el={el} />
          {console.log(el)}
        </div>
      ))}
    </div>
  </div>
  )
}

