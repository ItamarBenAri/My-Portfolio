import React from "react";
import { myProjects } from "../../../../Constants/MyProjects";
import { NavLink } from 'react-router-dom';
import { StarsSharp } from "@mui/icons-material";
import AppComponentsStyle from "../../../../Theme/AppComponentsStyle";

type ProjectsLinksMenuProps = {
    style: React.CSSProperties
}

export function ProjectsMenu(props: ProjectsLinksMenuProps): JSX.Element {
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
    return (
        <div className="ProjectsMenu" style={props.style}>
            {myProjects.map(p => (
                <div key={p.id}>
                    <NavLink
                        end
                        to={p.projectRoute.route}
                        style={({ isActive }) => AppComponentsStyle.getLinkStyle(isActive, hoveredLink === p.name)}
                        onMouseEnter={() => setHoveredLink(p.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {p.projectRoute.icon} {p.name}
                        {p.isFavorite &&
                            <StarsSharp color="success" sx={AppComponentsStyle.headerFavoriteIcon} />}
                    </NavLink>
                </div>
            ))}
        </div>
    );
}
