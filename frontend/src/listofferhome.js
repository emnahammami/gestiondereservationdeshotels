
import { ListGroup,Card,Button } from 'react-bootstrap'


import { useNavigate } from "react-router-dom";
export default function Listofferhome({el}) {
  
    const navigate=useNavigate()
  
    const handleClick = (e) => {
        e.preventDefault();
    
        navigate("/register")
      };
   return (
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
              
              <ListGroup.Item>nom hotel {el.nomhotel}</ListGroup.Item>
              <ListGroup.Item>rating {el.rating}</ListGroup.Item>
              <ListGroup.Item
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="secondary"  onClick={handleClick}>Reserver</Button>
            
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
      )}

      
      
      
      
        
  


