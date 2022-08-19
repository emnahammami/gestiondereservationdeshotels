import React from 'react'
import { Alert } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
export default function Listusers(props) {
  return (
    <>
    <Alert  variant="danger">
    
      <Alert.Heading></Alert.Heading>
      <Alert.Heading>reservation {props.el.nomhotel}</Alert.Heading>
    
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
