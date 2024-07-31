import "./MobileVideoFrame.css";
import { FrameVideo } from "../FrameVideo/FrameVideo";

type MobileVideoFrameProps = {
    youtubeVideoSrc: string
}

export function MobileVideoFrame(props: MobileVideoFrameProps): JSX.Element {
    return (
        <div className="MobileVideoFrame">
            <div className="graphic">
                <div className="case">
                    <div className="container-outer">
                        <div className="container-inner">
                            <div className="screen">
                                <FrameVideo youtubeVideoSrc={props.youtubeVideoSrc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
