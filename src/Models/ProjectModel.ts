import { ReactNode } from "react";

class ProjectRouteModel {
    public route: string;
    public icon: ReactNode;
}
class ProjectGithubModel {
    public repositoryLink: string;
    public liveLink?: string;
}
class Paragraph {
    public subtitle?: string;
    public html: string;
    public imageSrc: string;
    public imageAlt: string;
}

class ProjectModel {
    public id: number;
    public name: string;
    public github: ProjectGithubModel;
    public projectRoute: ProjectRouteModel;
    public isFavorite?: boolean;
    public paragraphs: Paragraph[];
}

export default ProjectModel;