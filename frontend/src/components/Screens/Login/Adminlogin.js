import React, { useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading';
import ErrorMessage from '../../ErrorMessage';
import Adminheader from '../../header/Adminheader';


function Adminlogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate()

    const submitHandler = async (e) => {

        e.preventDefault()

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            setLoading(true)
            const admindata  = await axios.post('/api/admins/login', {
                email,
                password,
            }, config
            );



            console.log(admindata.data);
            localStorage.setItem("adminInfo", JSON.stringify(admindata))
            if (admindata) {
                navigate('/adminHome')
            }
            setLoading(false)
        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }

    }

  return (
    <div>
       <Adminheader/>
          <div className='loginPage mt-5'>
              <Container>
                <h1 className='text-center'>Admin Login</h1>
                  {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                  {loading && <Loading />}

                  <Row>
                      <Card>
                          <Card.Body>

                              <Form onSubmit={submitHandler}>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control type="email"
                                          value={email}
                                          placeholder="Enter email"
                                          onChange={(e) => setEmail(e.target.value)}
                                      />
                                     
                                  </Form.Group>

                                  <Form.Group className="mb-3" controlId="formBasicPassword">
                                      <Form.Label>Password</Form.Label>
                                      <Form.Control type="password"
                                          value={password}
                                          placeholder="Password"
                                          onChange={(e) => setPassword(e.target.value)}
                                      />
                                  </Form.Group>

                                  <Button variant="primary" type="submit">
                                      Submit
                                  </Button>
                                  
                              </Form>
                          </Card.Body>
                      </Card>

                  </Row>
              </Container>
          </div>
    </div>
  )
}

export default Adminlogin


