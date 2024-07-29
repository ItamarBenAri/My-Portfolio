import ProjectPageTemplate from "../ProjectPageTemplate/ProjectPageTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { myProjects } from "../../../Constants/MyProjects";
import { useEffect } from "react";

export function ProjectPage(): JSX.Element {
    const params = useParams();
    const navigate = useNavigate();
    const projectLink = params.projectLink;
    const idx = myProjects.findIndex(p => p.projectLink.link === "/portfolio/" + projectLink);
    useEffect(() => {        
        if (idx === -1) navigate("/page-not-found");
    }, [idx, navigate, projectLink]);

    if (idx === - 1) {
        return null; 
    }

    return (
        <div className="ProjectPage">
            <ProjectPageTemplate key={myProjects[idx].id} project={myProjects[idx]} /> 
        </div>
    );
}
