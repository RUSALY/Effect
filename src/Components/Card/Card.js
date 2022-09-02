import React, { useEffect , useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import "./Card.css"
import {RiGitRepositoryCommitsLine} from 'react-icons/ri'
import {GiShadowFollower} from 'react-icons/gi'
import {RiUserFollowLine} from 'react-icons/ri'
import {VscGistSecret} from 'react-icons/vsc'







const Card = ({user, setUser}) => {
    return (
        <Container>
        <section>
            <Row className="g-3">


                <Col md={3} >
                    <div className="cd">
                        <Row>
                            <Col md={4} className="d-flex justify-content-center">
                               <div  className="icondiv icondiv1" >
                                 <RiGitRepositoryCommitsLine/>
                               </ div>
                            </Col>
                            <Col md={6}>
                                <h4>{user.public_repos}</h4>
                                <p>Repo</p>
                            </Col>
                        </Row>
                    </div>
                </Col>


                
                <Col md={3} >
                    <div className="cd">
                        <Row>
                            <Col md={4} className="d-flex justify-content-center">
                                <div className="icondiv icondiv2">
                                        <GiShadowFollower/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h4>{user.following}</h4>
                                <p>Following</p>
                            </Col>
                        </Row>
                    </div>
                </Col>


                
                

                <Col md={3} >
                    <div className="cd">
                        <Row>
                            <Col md={4} className="d-flex justify-content-center">
                                <div className="icondiv icondiv3">
                                    <RiUserFollowLine/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h4>{user.followers}</h4>
                                <p>Followers</p>
                            </Col>
                        </Row>
                    </div>
                </Col>



                <Col md={3} >
                    <div className="cd">
                        <Row>
                            <Col md={4} className="d-flex justify-content-center">
                                <div className="icondiv icondiv4">
                                    <VscGistSecret/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h4>{user.public_gists}</h4>
                                <p>Gists</p>
                            </Col>
                        </Row>
                    </div>
                </Col>



            </Row>
        </section>
        </Container>

            
      
    );
};

export default Card;