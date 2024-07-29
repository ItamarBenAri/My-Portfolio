import "./LaptopVideoFrame.css";
import { FrameVideo } from "../FrameVideo/FrameVideo";

type LaptopVideoFrameProps = {
    videoSrc: string
}

export function LaptopVideoFrame(props: LaptopVideoFrameProps): JSX.Element {
    return (
        <div className="LaptopVideoFrame">
            <div className="macbook">
                <div className="screen">
                    <div className="viewport">
                        <FrameVideo videoSrc={props.videoSrc} />
                    </div>
                </div>
                <div className="base"></div>
                <div className="notch"></div>
            </div>
        </div>
    );
}
