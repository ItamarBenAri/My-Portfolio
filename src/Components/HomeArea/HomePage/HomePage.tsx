import { useMediaQuery } from 'react-responsive';
import useTitle from "../../../Utils/UseTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';
import { useEffect } from "react";
import videoSrc from "../../../Assets/Videos/presentation.mp4";
import video1Src from "../../../Assets/Videos/video1.mp4";
import { MobileVideoFrame } from "../DeviceFrameArea/MobileVideoFrame/MobileVideoFrame";
import { LaptopVideoFrame } from "../DeviceFrameArea/LaptopVideoFrame/LaptopVideoFrame";
import { MyResumeBtn } from '../MyResumeBtn/MyResumeBtn';

export function HomePage(): JSX.Element {
    useTitle("Itamar Ben Ari | Portfolio");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const isSmallScreen = useMediaQuery({ query: '(max-width: 490px)' });
    const isLargeScreen = useMediaQuery({ query: '(min-width: 490px)' });

    return (
        <div className="HomePage" data-aos="fade-up">
            {isSmallScreen && <MobileVideoFrame videoSrc={video1Src} />}
            {isLargeScreen && <LaptopVideoFrame videoSrc={videoSrc} />}
            <MyResumeBtn />
        </div>
    );
}
