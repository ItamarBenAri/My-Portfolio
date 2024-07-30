import "./ProjectPageTemplate.css";
import ProjectModel from "../../../Models/ProjectModel";
import useTitle from "../../../Utils/UseTitle";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Code, Preview } from "@mui/icons-material";
import Button from '@mui/joy/Button';
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import parse from 'html-react-parser';

type ProjectPageTemplateProps = {
    project: ProjectModel;
}

export function ProjectPageTemplate(props: ProjectPageTemplateProps): JSX.Element {
    useTitle(`Itamar Ben Ari | ${props.project.name}`);
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="ProjectPageTemplate">
            <h1 className="title" data-aos="fade-down">{props.project.name}</h1>
            <div className="githubButtons" data-aos="fade-in">
                <a
                    href={props.project.github.repositoryLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={AppComponentsStyle.projectPageBtn}
                    >
                        <span>Repository Link</span> &nbsp;<Code />
                    </Button>
                </a>
                {props.project.github.liveLink && props.project.name !== "My Portfolio" &&
                    <a
                        href={props.project.github.liveLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            variant="outlined"
                            color="danger"
                            sx={AppComponentsStyle.projectPageBtn}
                        >
                            <span>Live Project</span> &nbsp;<Preview />
                        </Button>
                    </a>
                }
            </div>
            <div className="content">
                {props.project.paragraphs.map((e, i) =>
                    <div key={i}>
                        {i !== 0 && <h2 className="subtitle" data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}>{e.subtitle}</h2>}
                        <div className={`describe-section ${i % 2 === 0 ? "even" : "odd"}`} data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}>
                            <Zoom>
                                <img src={e.image} alt={e.imageAlt} className="describe-image" />
                            </Zoom>
                            {parse(`<p className="describe-text">
                                ${e.html}
                            </p>`)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectPageTemplate;
