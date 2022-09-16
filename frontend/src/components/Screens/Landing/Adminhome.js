
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Adminheader from '../../header/Adminheader'


const Adminhome = () => {
    //  const [state,setState]=useState({userdata:[]})
     const [state, setState] = useState([])
    const fetchUser=async()=>{
    const { data } = await axios.get('/api/users/user')
    // setState({
    //     ...state,
    //     userdata:data
    // })
         setState(data)
    console.log(data);
    }

    const deleteUser = async(userId) => {
        let response=await axios.delete(`/api/users/userDelete/${userId}`)
        console.log(response);
        if(response){
            const { data } = await axios.get('/api/users/user')
            // setState({
            //     ...state,
            //     userdata:data
            // })
            setState(data)
            console.log(data);
        }
    }



    useEffect(()=>{
        fetchUser();
    },[])

//   let {userdata}=state

  return (
    <div>
        <Adminheader/>
        <Container>
    <div className='mt-5'>
          <Table striped bordered hover>
              <thead>
                  <tr>
                     
                      <th>Name</th>
                      <th>Email</th>
                      <th>Options</th>
                  </tr>
              </thead>
              
                {state.map(state=>{
                    return(
                        <tbody>
                        <tr>
                           
                            <td>{state.name}</td>
                            <td>{state.email}</td>
                               
                            
                                
                           <td>
                            
                        <Button variant="info">
                                        <Link to={`/edit/${state._id}`}>
                             Edit
                            </Link>
                            </Button>
                                </td>
                                <td>
                        <Button variant="warning" onClick={() => {deleteUser(state._id) }}>Delete</Button>
                                </td>     
                           
                            
                            
                            
                        </tr>
                        </tbody>
                    )
                })}
                  
                  
              
          </Table>
    </div>
    </Container>
      </div>
  )
}

export default Adminhome
