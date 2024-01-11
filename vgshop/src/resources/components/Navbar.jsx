import React from 'react'
import Logo from "../../img/logo.png"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarbt from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import def_ava from '../../img/default_avatar.png'

const Navbar = () => {

    const user = {
        id: "1",
        cart_id: "1",
        username: "User Name",
        avatar: "",
    }

    return (
        <Navbarbt expand="lg" key={user.id}>
            <Container>
                <Link className="logo" to="/">
                    <img className="logo-img" src={Logo} alt="" />
                </Link>
                <Navbarbt.Toggle aria-controls="basic-navbar-nav" />
                <Navbarbt.Collapse id="basic-navbar-nav">
                    <form class="search-form d-flex align-item-center" role="search">
                        <button class="btn-search" type="submit">
                            <FontAwesomeIcon icon={icon({name: "magnifying-glass"})} />
                        </button>
                        <input class="search-bar" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <Nav className="me-auto">
                        <Link to={`/cart/${user.cart_id}`} className="navbar-cart-link">
                            <FontAwesomeIcon icon={icon({name: "cart-shopping"})} className="navbar-cart"/>
                        </Link>
                        <Link to={`/clients/${user.id}`} className="navbar-cart-link">
                            {user.avatar.length === 0 ? 
                            <img className="user-logo-def-img" src={def_ava} alt="" />
                            :<img className="user-logo-img" src={user.avatar} alt="" />}                        
                        </Link>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={user.username}
                            menuVariant="white"
                            className="navbar-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbarbt.Collapse>
            </Container>
        </Navbarbt>
    )
}

export default Navbar