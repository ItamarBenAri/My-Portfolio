import "./Header.css";
import { NavLink } from 'react-router-dom';
import { Code } from "@mui/icons-material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import React from "react";
import { SmallScreenMenu } from "../MenuArea/SmallScreenMenu/SmallScreenMenu";
import { LargeScreenMenu } from "../MenuArea/LargeScreenMenu/LargeScreenMenu";

function Header(): JSX.Element {
    return (
        <div>
            <nav className="Header">
                <div className="logo">
                    <NavLink to="/" className="logoLink">
                        <span className="logoLargeScreen">
                            <Code sx={AppComponentsStyle.headerLargeLogo} /> <span className="logoNameLargeScreen">Full Stack Developer</span>
                        </span>
                        <span className="logoSmallScreen">
                            <Code sx={AppComponentsStyle.headerSmallLogo} /> <span className="logoNameSmallScreen">Full Stack Developer</span>
                        </span>
                    </NavLink>
                </div>
                <div className="smallScreenMenu">
                    <SmallScreenMenu />
                </div>
                <div className="largeScreenMenu">
                    <LargeScreenMenu />
                </div>
            </nav>
        </div>
    );
}

export default Header;
