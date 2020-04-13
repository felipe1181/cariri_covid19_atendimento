import React from 'react';


import { Col, Container,Row} from 'reactstrap';
import './index.css';

import NavMenu from '../default_style/nav-menu';

export default function Dashboard(){
    return(
        <Container className="themed-container container-main" fluid={true}> 
            <NavMenu/>
            <Row className="content" row xs="2">
                <Col className="menu-nav-left " sm={{size:3}} >
                    <h1>teste</h1>
                </Col> 
                <Col className="content-data" sm={{size:9}} >
                    <h1>content</h1>
                </Col>
            </Row> 
        </Container> 
    );
}