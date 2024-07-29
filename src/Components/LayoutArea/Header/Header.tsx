import "./Header.css";
import { NavLink } from 'react-router-dom';
import { Code } from "@mui/icons-material";
import ProjectsLinksModal from "../../ProjectsArea/ProjectsLinksModal/ProjectsLinksModal";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import React from "react";
import { myProjects } from "../../../Constants/MyProjects";

function Header(): JSX.Element {
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
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
                    <div>
                        <ProjectsLinksModal />
                    </div>
                </div>
                <div className="largeScreenMenu">
                    <div>
                        <div style={AppComponentsStyle.largeScreenMenu}>
                            {myProjects.map(p => (
                                <NavLink
                                    key={p.id}
                                    end
                                    to={p.projectLink.link}
                                    style={({ isActive }) => AppComponentsStyle.getLinkStyle(isActive, hoveredLink === p.name)}
                                    onMouseEnter={() => setHoveredLink(p.name)}
                                    onMouseLeave={() => setHoveredLink(null)}                                    >
                                    {p.projectLink.icon} {p.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
