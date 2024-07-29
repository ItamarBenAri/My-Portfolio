import { Button } from '@mui/material';
import resumeSrc from "../../../Assets/Files/Itamar-Ben-Ari-CV.pdf";
import { GetApp } from '@mui/icons-material';
import { filesServices } from "../../../Services/FilesService";

export function MyResumeBtn(): JSX.Element {
    return (
        <div className="MyResumeBtn">
            <Button
                variant="contained"
                color="success"
                size="large"
                startIcon={<GetApp />}
                LinkComponent={"a"}
                href={resumeSrc}
                download={filesServices.GetFileName(resumeSrc)}
            >
                Get My CV
            </Button>
        </div>
    );
}
