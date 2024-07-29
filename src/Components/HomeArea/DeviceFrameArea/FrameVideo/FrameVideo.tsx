import { Pause, PlayArrow } from "@mui/icons-material";
import { useState, useRef } from "react";
import "./FrameVideo.css";
type FrameVideoProps = {
    videoSrc: string
}
export function FrameVideo(props: FrameVideoProps): JSX.Element {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showBubble, setShowBubble] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayPause = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.play();
                setIsPlaying(true);
                setShowBubble(true);
                setTimeout(() => setShowBubble(false), 1000);
            } else {
                videoElement.pause();
                setIsPlaying(false);
                setShowBubble(true);
                setTimeout(() => setShowBubble(false), 1000);
            }
        }
    };
    return (
        <div className="FrameVideo">
            <video
                ref={videoRef}
                controls={false}
                onClick={handlePlayPause}
                playsInline
                className="video"
            >
                <source src={props.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {showBubble && (
                <div className="play-pause-bubble">
                    {isPlaying ? <Pause /> : <PlayArrow />}
                </div>
            )}
        </div>
    );
}
