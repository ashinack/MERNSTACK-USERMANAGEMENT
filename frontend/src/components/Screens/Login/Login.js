import {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import './Login.css'
import axios from 'axios'
import ErrorMessage from '../../ErrorMessage';
import Loading from '../../Loading';
import Header from '../../header/Header';

const Login = () => {
 const [email,setEmail]=useState('')
 const [password, setPassword] = useState("");
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

 const submitHandler = async (e) =>{
   
   e.preventDefault()
 
  try {
    const config = {
      headers:{
        "Content-type":"application/json"
      }
    }
    setLoading(true)
    const {data}=await axios.post('/api/users/login',{
      email,
      password,
    },config
    );
    
    
  
    console.log(data);
    localStorage.setItem('userInfo',JSON.stringify(data))
    if(data){
      navigate('/')
    }
    setLoading(false)
  } catch (error) {
    setError(error.response.data.message)
    setLoading(false)    
  }

 }
  return (
    <div>
    <Header/>
    <div className='loginPage mt-3'>
      <Container>
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
         onChange={(e)=>setEmail(e.target.value)}
          />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
                value={password}
         placeholder="Password" 
         onChange={(e)=>setPassword(e.target.value)}
         />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h5 className='mt-3'>New customer ? <Link to='/register' style={{textDecoration:'none'}}>Register</Link></h5>
    </Form>
    </Card.Body>
    </Card>

        </Row>
      </Container>
    </div>
   </div>
  );
}

export default Login;