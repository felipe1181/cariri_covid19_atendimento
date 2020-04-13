import React from 'react';

import './index.css'; 
import {Nav,Container, NavItem, NavLink} from 'reactstrap';

export default function NavMenu(){
    return(
        <Container className="themed-container" fluid={true}>
            <Nav className="nav-menu-top" pills>
                <NavItem >
                    <NavLink className="active-link" href="#" active>Link</NavLink>
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
        </Container>
    );
}