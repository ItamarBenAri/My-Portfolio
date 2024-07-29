import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../page404/page404";
import { HomePage } from "../../HomeArea/HomePage/HomePage";
import { ProjectPage } from "../../ProjectsArea/ProjectPage/ProjectPage";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* App Routes */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/portfolio/:projectLink" element={<ProjectPage />} />

                {/* Default Route: */}
                <Route path="/" element={<Navigate to="/home" />} />

                {/* Page not found routes: */}
                <Route path="/page-not-found" element={<Page404 />} />
                <Route path="*" element={<Page404 />} />

            </Routes>

        </div>
    );
}

export default Routing;