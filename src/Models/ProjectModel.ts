import { ReactNode } from "react";

class ProjectLinkModel {
    public link: string;
    public icon: ReactNode;
}
class ProjectGithubModel {
    public repositoryLink: string;
    public liveLink?: string;
}
class Paragraph {
    public subtitle?: string;
    public text: string;
    public image: string;
    public imageAlt: string;
}

class ProjectModel {
    public id: number;
    public name: string;
    public github: ProjectGithubModel;
    public projectLink: ProjectLinkModel;
    public paragraphs: Paragraph[];
}

export default ProjectModel;