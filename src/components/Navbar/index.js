import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/luna" activeStyle>
                        Luna
                    </NavLink>
                    <NavLink to="/isak" activeStyle>
                        Isak
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;