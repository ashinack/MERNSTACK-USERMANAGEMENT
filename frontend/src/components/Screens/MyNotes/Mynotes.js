import React from 'react'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios'

function Notes() {
    const [user, setUser] = useState([])



    const fetchUsers = async () => {
        const { data } = await axios.get('/api/users/getuser');
        setUser(data)
        console.log(data);

    }

    useEffect(() => {
        fetchUsers();

    }, [])



    const deleteHandler = (id) => {
        axios.post(`/getuser/${id}/delete`);
        setUser((user) => {
            return user.filter((user) => user._id !== id)
        })
    }





    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Id</th>
                    <th>Block</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user) => (

                    <tr>
                        <td>1</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user._id}</td>
                        <td><Button >Edit</Button></td>
                        <td><Button>Block</Button></td>

                        <td><Button
                            variant="danger" onClick={() => deleteHandler(user._id)} >Delete</Button></td>
                    </tr>

                ))}


            </tbody>
        </Table>

    )
}

export default Notes