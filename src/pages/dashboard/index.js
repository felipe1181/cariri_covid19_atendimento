import React from 'react';

import './index.css';
import { Col, Container,Row,Nav, NavItem, NavLink} from 'reactstrap';

export default function Dashboard(){
    return(
        <Container className="themed-container" fluid={true}> 
           <Nav className="nav-menu-top">
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
            </Nav> 
            <Row className="content" row xs="2">
                <Col className="menu-nav-left" sm={{size:3}} >
                    <h1>teste</h1>
                </Col> 
                <Col className="content-data" sm={{size:9}} >
                    <h1>content</h1>
                </Col>
            </Row> 
        </Container> 
    );
}