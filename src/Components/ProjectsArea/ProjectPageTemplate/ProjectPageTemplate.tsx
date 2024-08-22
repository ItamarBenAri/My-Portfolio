import "./ProjectPageTemplate.css";
import ProjectModel from "../../../Models/ProjectModel";
import useTitle from "../../../Utils/UseTitle";
import { useEffect } from "react";
import AOS from 'aos';
import { Code, Preview } from "@mui/icons-material";
import Button from '@mui/joy/Button';
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import 'react-medium-image-zoom/dist/styles.css';
import parse from 'html-react-parser';
import underConstructionSrc from "../../../Assets/Images/under-construction.gif";
import { ImageWithSkeleton } from "../ImageWithSkeleton/ImageWithSkeleton";
import { appServices } from "../../../Services/AppServices";

type ProjectPageTemplateProps = {
    project: ProjectModel;
};

export function ProjectPageTemplate(props: ProjectPageTemplateProps): JSX.Element {
    useTitle(`Itamar Ben Ari | ${props.project.name}`);
    
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="ProjectPageTemplate">
            <h1 className="title" data-aos="fade-down">{props.project.name}</h1>
            <div className="linksButtons" data-aos="fade-in">
                {props.project.links.repositoryLink && (
                    <a
                        href={props.project.links.repositoryLink}
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
                )}
                {props.project.links.liveLink && (
                    <a
                        href={props.project.links.liveLink}
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
                )}
            </div>
            <div className="content">
                {props.project.paragraphs.length > 0 ? (
                    props.project.paragraphs.map((e, i) => (
                        <div key={i}>
                            {i !== 0 && (
                                <h2 className="subtitle" data-aos={appServices.isEven(i) ? "fade-right" : "fade-left"}>
                                    {e.subtitle}
                                </h2>
                            )}
                            <div
                                className={`describe-section ${appServices.isEven(i) ? "even" : "odd"}`}
                                data-aos={appServices.isEven(i) ? "fade-right" : "fade-left"}
                            >
                                <ImageWithSkeleton src={e.imageSrc} alt={e.imageAlt} />
                                {parse(`<p className="describe-text">${e.html}</p>`)}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="under-construction">
                        <img src={underConstructionSrc} alt="Under construction page" />
                    </div>
                )}
            </div>
        </div>
    );
}