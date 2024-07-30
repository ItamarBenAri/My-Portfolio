import "./SocialMediaLinks.css";
import Link from "@mui/material/Link";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import { Divider } from "@mui/material";

export function SocialMediaLinks(): JSX.Element {
    return (
        <div className="SocialMediaLinks">
            <div className="divider">
                <Divider variant="middle" />
            </div>
            <Link href="https://www.linkedin.com/in/itamar-ben-ari-69678b28b/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.socialLink}
            >
                <LinkedIn />
            </Link>
            <Link
                href="https://github.com/ItamarBenAri/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.socialLink}
            >
                <GitHub />
            </Link>
            <Link
                href="mailto:etamar234@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={AppComponentsStyle.socialLink}
            >
                <Email />
            </Link>
        </div>
    );
}
