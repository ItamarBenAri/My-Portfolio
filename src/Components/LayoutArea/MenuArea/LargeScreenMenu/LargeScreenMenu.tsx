import AppComponentsStyle from "../../../../Theme/AppComponentsStyle";
import { ProjectsMenu } from "../ProjectsMenu/ProjectsMenu";

export function LargeScreenMenu(): JSX.Element {
    return (
        <div className="LargeScreenMenu">
            <ProjectsMenu style={AppComponentsStyle.largeScreenMenu} />
        </div>
    );
}
