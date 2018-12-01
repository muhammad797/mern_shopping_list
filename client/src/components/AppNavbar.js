import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, NavLink
} from 'reactstrap';

class AppNavbar extends React.Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        return (
            <div>
                <Navbar color={"dark"} dark expand={"sm"} className={"mb-5"}>
                    <Container>
                        <NavbarBrand href={"#"}>Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle.bind(this)}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className={"ml-auto"} navbar>
                                <NavItem>
                                    <NavLink href={"https://github.com/muhammad797"}>
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;