import "./MobileVideoFrame.css";
import { FrameVideo } from "../FrameVideo/FrameVideo";

type MobileVideoFrameProps = {
    videoSrc: string
}

export function MobileVideoFrame(props: MobileVideoFrameProps): JSX.Element {
    return (
        <div className="MobileVideoFrame">
            <div className="graphic">
                <div className="case">
                    <div className="container-outer">
                        <div className="container-inner">
                            <div className="screen">
                                <FrameVideo videoSrc={props.videoSrc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
