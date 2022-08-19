import React, { useEffect } from "react";

import { getusers,getreservations } from "./redux/Action/authAction";
import AdminProfile from "./AdminProfile";


import { useDispatch, useSelector } from "react-redux";
import Listoffers from "./Listoffers";
const UserProfile = () => {
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
    dispatch(getreservations());
  }, []);
  const user = useSelector((state) => state.Authreducer.user);
  const users = useSelector((state) => state.Authreducer.users);
  const reservations = useSelector((state) => state.Authreducer.reservations);
  
  console.log("lu"+users)
  console.log("lr"+reservations)
 if(user.isAdmin){return (
  <div>

  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    }}
  >
    {users?.map((el) => (
      <div key={el._id}>
        <AdminProfile el={el} />
        {console.log(el)}
      </div>
    ))}
  </div>
</div>

);}
else if (!user.isAdmin){
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
          <Listoffers el={el} user={user} />
          {console.log(el)}
        </div>
      ))}
    </div>
  </div>
  );
}
  
};

export default UserProfile;
