import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getreserve } from './redux/Action/authAction';
import { useSelector } from 'react-redux';

import List from "./List"
export default function Listreservation() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getreserve());

    }, []);
    const reserves = useSelector((state) => state.Authreducer.reserve);
    console.log("lr"+reserves)
  return (
    <div>


      {reserves?.map((el) => (
        <div key={el._id}>
         
          <List el={el} />
          {console.log(el)
          
          
          
          }
        </div>
      ))}
    </div>

      )}
   
 
 
