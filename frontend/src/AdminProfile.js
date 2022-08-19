import React, { useState } from "react";
import { Button, Card, ListGroup,Form } from "react-bootstrap";
import { deleteusers, updateusers} from "./redux/Action/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AdminProfile = ({ el }) => {  const dispatch = useDispatch();
  const [modif, setModif] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteusers(el._id,navigate));
  };
  const handleClick2 = (e) => {
    e.preventDefault();
setModif(true)
 
  console.log(modif)
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    console.log("params"+name+role+isAdmin);
    if(name){
      dispatch(updateusers(el._id,{name})); 
    }
    if(role){
      dispatch(updateusers(el._id,{role})); 
    }
    if(isAdmin){
      dispatch(updateusers(el._id,{isAdmin})); 
    }
    if(email){
      dispatch(updateusers(el._id,{email})); 
    }
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
            <ListGroup.Item>name {el?.name}</ListGroup.Item>
            <ListGroup.Item>email {el.email}</ListGroup.Item>
            <ListGroup.Item>role {el.role}</ListGroup.Item>
            <ListGroup.Item>isAdmin {String(el.isAdmin)}</ListGroup.Item>
            <ListGroup.Item
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button variant="danger" onClick={handleClick}>DELETE</Button>
              <Button variant="warning" onClick={handleClick2}>EDIT</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );}
  if (modif){

return(
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control  placeholder={el.name}  onChange={(e) => setName(e.target.value)}
                  value={name}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>role</Form.Label>
    <Form.Control placeholder={el.role} onChange={(e) => setRole(e.target.value)}
                  value={role} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>isAdmin</Form.Label>
    <Form.Control  placeholder={String(el.isAdmin)}onChange={(e) => setIsAdmin(e.target.value)}
                  value={isAdmin} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>email</Form.Label>
    <Form.Control type="email" placeholder={el.email} onChange={(e) => setEmail(e.target.value)}
                  value={email} />
  </Form.Group>
  <Button variant="warning" type="submit" onClick={handleClick3}>
    Edit
  </Button>
</Form>
)




  }
  
};

export default AdminProfile;
