import React from 'react';

import './index.css'; 
import {Nav,Container, NavItem, NavLink} from 'reactstrap';

export default function NavMenu(){
    return(
        <Container className="themed-container" fluid={true}>
            <Nav className="nav-menu-top" pills>
                <NavItem>
                    <NavLink className="active-link" href="/inicio" active><b>{process.env.REACT_APP_NAME}</b></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="link-item" href="#">Início</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="link-item" href="#">Atendimento</NavLink>
                </NavItem> 
                <NavItem>
                    <NavLink className="link-item" href="#">Principais dúvidas</NavLink>
                </NavItem> 
            </Nav> 
        </Container>
    );
}