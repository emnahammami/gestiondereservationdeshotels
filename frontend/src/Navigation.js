import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "./carousel";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./redux/Action/authAction";
import Agency from "../src/Emma1.png"
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.Authreducer.user);
  const token = localStorage.getItem("token");
  console.log("token"+token)
 
 if (token&&!user){return (
   
    <header>
      <Navbar className="color-nav" variant="dark" >
        <Container>
          <Navbar.Brand ><Nav.Link as={Link} to="/"><img  className="agency"src={Agency} alt="img"/></Nav.Link></Navbar.Brand>
          <Nav  >
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Sign-up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
      
      
      
      <Carousel/>
      </header>
    )}
   else if (!token){return( <header>
    <Navbar className="color-nav" variant="dark" >
      <Container>
        <Navbar.Brand ><Nav.Link as={Link} to="/"><img  className="agency"src={Agency} alt="img"/></Nav.Link></Navbar.Brand>
        <Nav  >
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Sign-up
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar> 
    
    
    
    <Carousel/>
    </header>)}
    else if(token &&user&&!user.isAdmin){
      return(<header><Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand ><Nav.Link as={Link} to="/"><img  className="agency"src={Agency} alt="img"/></Nav.Link></Navbar.Brand>
        <Nav className="me-auto" >

        <Nav.Link
         as={Link} to="/annuler"  
          >
            Annuler des reservation
          </Nav.Link>



          <Nav.Link
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            log out
          </Nav.Link>
        </Nav>
        
      </Container>
    </Navbar><Carousel/></header>)
    }
  
     else if (token&&user  &&user.isAdmin){return(<header>
      <Navbar bg="danger" variant="dark">
        <Container>
        <Navbar.Brand ><Nav.Link as={Link} to="/profile"><img  className="agency"src={Agency} alt="img"/></Nav.Link></Navbar.Brand>
          <Nav className="me-auto" >
            
            <Nav.Link
              onClick={() => {
              
                navigate("/addreservation");
              }}
            >
              add reservation
            </Nav.Link>
            <Nav.Link
              onClick={() => {
              
                navigate("/updateoffer");
              }}
            >
              update offer
            </Nav.Link>
            <Nav.Link
              onClick={() => {
              
                navigate("/listreservation");
              }}
            >
              liste reservations
            </Nav.Link>
           
            <Nav.Link
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              log out
            </Nav.Link>
          </Nav>
         Admin {user.name}
        </Container>
      </Navbar>
     <Carousel/> </header>)}


















      
              }

export default Navigation;
