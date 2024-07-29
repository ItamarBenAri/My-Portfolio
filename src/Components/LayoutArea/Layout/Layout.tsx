import Copyrights from "../Copyrights/Copyrights";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";
import { FloatingButton } from "../../SharedArea/FloatingButton/FloatingButton";
import { ScrollToUp } from "../../SharedArea/ScrollToUp/ScrollToUp";
import { SocialMediaLinks } from "../../SharedArea/SocialMediaLinks/SocialMediaLinks";
import Accessibilik from "accessibility-react-widget";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <main>
                <Routing />
                <FloatingButton />
                <ScrollToUp />
                <Accessibilik />
            </main>
            <footer>
                <SocialMediaLinks />
                <Copyrights />
            </footer>
        </div>
    );
}

export default Layout;
