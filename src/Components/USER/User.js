import React, { useEffect} from 'react';
import { Row, Col ,Container } from 'react-bootstrap';
import "./User.css";
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsBuilding}from 'react-icons/bs';
import {FiLink} from 'react-icons/fi';

const User = ({username, user, setUser}) => {
     
     
   
   
        useEffect(()=>{
            async function handleData () {
                const result = await fetch (`https://api.github.com/users/${username}`)
                const data = await result.json()
                setUser(data)

            }
            handleData()
   },[username] )
   







    return (
        <Container>
        <section className="mt-5">
            <Row >
                <Col md={6}>
                    <div className="user">
                    <div  className="userintro">
                        <img src={user.avatar_url}alt="" />
                        <div>
                            <h5>{user.name}</h5>    
                            <p>{user.blog}</p>
                        </div>
                        <button>Follow</button>
                    </div>
                    <p>Include popular icons in your React projects easily with react-icons, 
                        which utilizes</p>
                    <div>
                        <BsBuilding/>
                        {user.company}</div>
                    <div>
                        <HiOutlineLocationMarker/>
                        {user.location}</div>
                    <div>
                        <FiLink/>
                        {user.organizations_url}</div>

                    </div>
                </Col>
                <Col md={6}>
                </Col>

            </Row>
        </section>
        </Container>
        
        )
};

export default User;