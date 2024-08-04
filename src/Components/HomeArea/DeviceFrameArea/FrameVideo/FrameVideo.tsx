import { PlayCircleFilled } from "@mui/icons-material";
import { useState } from "react";
import "./FrameVideo.css";
import ReactPlayer from "react-player";
import AppComponentsStyle from "../../../../Theme/AppComponentsStyle";

type FrameVideoProps = {
    youtubeVideoSrc: string
}
export function FrameVideo(props: FrameVideoProps): JSX.Element {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const loadingVideoFailed = () => {
        setLoading(false);
        setError(true);
    };

    return (
        <div className="FrameVideo">
            {loading && !error && <div className="youtube-loading">Loading...</div>}
            {error && <div className="youtube-error">Failed to load video</div>}
            <ReactPlayer
                url={props.youtubeVideoSrc}
                height="100%"
                width="100%"
                playing={true}
                playsinline={true}
                light={true}
                playIcon={<PlayCircleFilled sx={AppComponentsStyle.frameVideoPlayIcon} />}
                onClickPreview={() => setLoading(true)}
                onError={loadingVideoFailed}
                onReady={() => setLoading(false)}
            />
        </div>
    );
}
