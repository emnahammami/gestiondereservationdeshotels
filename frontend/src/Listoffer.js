import React,{useState} from 'react'
import { ListGroup,Card,Button ,Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deletereservations,updatereservations} from "./redux/Action/authAction";
import { useNavigate } from "react-router-dom";
export default function Listoffer({el}) {
    const [modif, setModif] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [nomhotel, setNomhotel] = useState("");
  
    const [rating, setRating] = useState(0);
    const [dateentree, setDateentree] = useState(Date.now());
    const [datesortie, setDatesortie] = useState(Date.now());
    const [user,setUser]=new useState(null)
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
    
        dispatch(deletereservations(el._id,navigate));
      };
      const handleClick2 = (e) => {
        e.preventDefault();
    
       setModif(true);
      };
      const handleClick4 = (e) => {
        e.preventDefault();
        dispatch(updatereservations(el._id,{user}))
      
      };
      const handleClick3 = (e) => {
        e.preventDefault();
        if (dateentree){dispatch(updatereservations(el._id,{dateentree})); }
        if (datesortie){dispatch(updatereservations(el._id,{datesortie})); }
        if (avatar){dispatch(updatereservations(el._id,{avatar})); }
        if (nomhotel){dispatch(updatereservations(el._id,{nomhotel})); }
        if (rating){dispatch(updatereservations(el._id,{rating})); } };
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
            <Card.Img variant="top" src={el.avatar} />
              <ListGroup.Item>date entree {el?.dateentree}</ListGroup.Item>
              <ListGroup.Item>date sortie {el.datesortie}</ListGroup.Item>
              <ListGroup.Item>nom hotel {el.nomhotel}</ListGroup.Item>
              <ListGroup.Item>rating {el.rating}</ListGroup.Item>
              
              <ListGroup.Item
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="danger"  onClick={handleClick}>DELETE</Button>
                <Button variant="warning" onClick={handleClick2} >EDIT</Button>
               
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
      )}
      else if( modif){return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>date entree</Form.Label>
          <Form.Control  placeholder={el.dateentree}  onChange={(e) => setDateentree(e.target.value)}
                        value={dateentree} type="date"/>
         
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>date sortie</Form.Label>
          <Form.Control placeholder={el.datesortie} onChange={(e) => setDatesortie(e.target.value)}
                        value={datesortie} type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>nom hotel</Form.Label>
          <Form.Control  placeholder={String(el.nomhotel)}onChange={(e) => setNomhotel(e.target.value)}
                        value={nomhotel} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>avatar</Form.Label>
          <Form.Control type="text" placeholder={el.avatar} onChange={(e) => setAvatar(e.target.value)}
                        value={avatar} />
                        <Form.Label>Rating</Form.Label>
          <Form.Control type="text" placeholder={el.rating} onChange={(e) => setRating(e.target.value)}
                        value={rating} />
        </Form.Group>
        <Button variant="warning" type="edit" onClick={handleClick3}>
          Edit
        </Button>
      </Form>
      )
      
      
      
      
        }}
  

