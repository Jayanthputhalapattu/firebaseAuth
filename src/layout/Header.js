import React, { useContext,useState } from "react";
import {Collapse,
       Navbar,
       NavbarToggler,
       NavbarBrand,
       Nav,
       NavItem,NavLink,NavbarText, Col
} from "reactstrap"

import {Link} from "react-router-dom"
import {UserContext} from "../context/UserContext"
import firebase from "firebase/app"
const Header = ()=>{
    const context = useContext(UserContext);
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return(
        <div>
       <Navbar color = "success" light expand ="md">
           <NavbarBrand><Link to="/" className="text-white">MAKE ME GARDEN</Link> </NavbarBrand>
    <NavbarBrand className="text-white">{
    context.user?.email ? context.user.email : ""

    }</NavbarBrand>
       <NavbarToggler onClick = {toggle}/>
       <Collapse  isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
            {context.user ? (
                  <NavItem>
                <NavLink tag={Link} to="/" className="text-white" onClick={()=>{context.setUser(null)}}>
                    logout
                </NavLink>
            </NavItem>) : (
                <>
                   <NavItem>
                   <NavLink tag={Link} to="/signup" className="text-white">
                           Signup
                       </NavLink>
                   </NavItem>
                   <NavItem>
                   <NavLink tag={Link} to="/signin" className="text-white">
                           Signin
                       </NavLink>
                   </NavItem>
                   </>
            )}
           
          
        </Nav>
       </Collapse>
       </Navbar>
       </div>
    )
}

export default Header