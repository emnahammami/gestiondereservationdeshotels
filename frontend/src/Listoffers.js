import React,{useState} from 'react'
import { ListGroup,Card,Button } from 'react-bootstrap'



import { useDispatch } from 'react-redux';

import { addreserve, getusers, updatereservations } from './redux/Action/authAction';
import { useSelector } from 'react-redux';
export default function Listoffers(props) {
   
    const dispatch = useDispatch();
    const [modif, setModif] = useState(false);
  
    const [nomhotel, setNomhotel] = useState(props.el.nomhotel);
 
    const [avatar, setAvatar] = useState(props.el.avatar);
    const [dateentree, setDateentree] = useState(props.el.dateentree);
    const [datesortie, setDatesortie] = useState(props.el.datesortie);
   const reservations=props.el
    
    const [rating, setRating] = useState(props.el.rating);
      const user = useSelector((state) => state.Authreducer.user);
     
      const handleClick = (e) => {
        e.preventDefault();
    setModif(true);
    dispatch(getusers()) 
    
   //dispatch(updatereservations(props.el._id,{user,dateentree,datesortie,nomhotel,avatar,rating})); 
   
   /* dispatch(addreserve(reservation,user))*/    
    dispatch(addreserve({reservations,user}))     
      };
      
    
   if(!modif){return (
    <div>
    <div>
      <Card
        style={{
          width: "20rem",
          margin: " 4rem auto ",
          display: "flex",
        }}
      >
        <ListGroup variant="flush">
        <Card.Img variant="top" src={props.el.avatar} />
        <ListGroup.Item>date d'entree {props.el.dateentree}</ListGroup.Item>
        <ListGroup.Item>date de sortie  {props.el.datesortie}</ListGroup.Item>
          <ListGroup.Item>nom hotel {props.el.nomhotel}</ListGroup.Item>
          <ListGroup.Item>rating {props.el.rating}</ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >{!modif&&<Button variant="secondary"  onClick={handleClick}>Reserver</Button>}
            
        
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  </div>
  )} 
  else if (modif){



    return(    <div>
        <div>
          <Card
            style={{
              width: "20rem",
              margin: " 4rem auto ",
              display: "flex",
            }}
          >
            <ListGroup variant="flush">
            <Card.Img variant="top" src={props.el.avatar} />
            <ListGroup.Item>date d'entree {props.el.dateentree}</ListGroup.Item>
            <ListGroup.Item>date de sortie  {props.el.datesortie}</ListGroup.Item>
              <ListGroup.Item>nom hotel {props.el.nomhotel}</ListGroup.Item>
              <ListGroup.Item>rating {props.el.rating}</ListGroup.Item>
              <ListGroup.Item
                style={{ display: "flex", justifyContent: "space-between" }}
              >
               <ListGroup.Item>reserved</ListGroup.Item> 
            
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>)
  }
 }
      
      
      
      
        
  


