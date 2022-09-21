import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Adminheader from '../../header/Adminheader'


function Edituser() {
    const [state,setState]=useState({
        email:'',
        name:''
})
    let navigate=useNavigate()
    let {userId}=useParams()
    const editData = async (userId)=>{
        console.log(userId);
        
        const editdata = await axios.get(`/api/users/edituser/${userId}`)
         setState(editdata.data)
       
        console.log(editdata.data);
    }
    
    useEffect(() => {
        editData(userId);
    }, [])

     const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    let submitHandler=async(e)=>{
        e.preventDefault();

         console.log('1111');
        console.log(state._id);
        const updateUser=async()=>{
            await axios.put(`/api/users/postedit/${state._id}`,(state))
          
        }
       updateUser()

         if(updateUser){
            navigate('/adminHome')
         }

    }

   
  return (
    <div>
        <Adminheader/>
      <Card style={{ width: '18rem' }} className="mt-5 mx-auto">
          
          <Card.Body>
           
              <Card.Title className='text-center'>Edit User</Card.Title>
              {/* <pre>{JSON.stringify(state)}</pre> */}
                
              <Form onSubmit={submitHandler}>
              
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                      <Form.Label></Form.Label>
                      <Form.Control type="text"
                      name="name"
                          value={state.name}
                          onChange={handleChange}
                          placeholder="Enter Name" />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email"
                      name="email"
                          value={state.email}
                          onChange={handleChange}
                          placeholder="Enter email" />
                              
                  </Form.Group>

                  
                 

                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
                 
              </Form>
               
              
               
          </Card.Body>
      </Card>
      </div>
  )
}

export default Edituser
