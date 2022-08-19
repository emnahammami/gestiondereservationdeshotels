import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addreservations} from "./redux/Action/authAction";
import { useNavigate } from 'react-router-dom';
export default function Addreservation() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [dateentree, setDateentree] = useState(Date.now());
    const [datesortie, setDatesortie] = useState(Date.now());
  
    const [rating, setRating] = useState(0);
    const [nomhotel, setNomhotel] = useState("");
    const [avatar, setAvatar] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
       console.log("data"+dateentree+datesortie,rating,nomhotel,avatar)
       dispatch(addreservations({dateentree,datesortie,rating,nomhotel,avatar})); 
       navigate("/updateoffer")
      };
    return (

   

  
    <Form>
        from
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>date entree</Form.Label>to
      <Form.Control type="date" onChange={(e) => setDateentree(e.target.value)}
                  value={dateentree} />
      
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>date entree</Form.Label>to
      <Form.Control type="date" onChange={(e) => setDatesortie(e.target.value)}
                  value={datesortie} />
      
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>nom hotel</Form.Label>
      <Form.Control type="text" placeholder="nom hotel"  onChange={(e) => setNomhotel(e.target.value)}
                  value={nomhotel} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>avatar</Form.Label>
      <Form.Control type="text" placeholder="url" onChange={(e) => setAvatar(e.target.value)}
                  value={avatar} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>rating</Form.Label>
      <Form.Control type="text" placeholder="rating" onChange={(e) => setRating(e.target.value)}
                  value={rating}  />
    </Form.Group>
   
    <Button variant="danger" type="submit" onClick={handleClick}>     Add
    </Button>
  </Form>
  )
}
