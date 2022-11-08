import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElement' ;

const Navbar =() =>{
    return(
        <>
        <Nav>
            <NavLink to="/" >
             <h1>Logo</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/Follow" activceStyle>
                Follow us on
                </NavLink>
                <NavLink to="/Facebook" activceStyle>
                Facebook
                </NavLink>
                <NavLink to="/Twitter" activceStyle>
                Twitter
                </NavLink>
                <NavLink to="/Instagram" activceStyle>
                Instagram
                </NavLink>
                <NavLink to="/Youtube" activceStyle>
                Youtube
                </NavLink>
                <NavLink to="/Get" activceStyle>
                Get Embassy Screens app on 
                </NavLink>
                {/* <NavBtn>
                <NavBtnLink to="/App_Store " activceStyle>
                App Store 
                </NavBtnLink>
                </NavBtn> */}
                {/* <NavBtn>
                <NavBtnLink to="/Google_Play" activceStyle>
                Google Play
                </NavBtnLink>
                </NavBtn> */}
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;
