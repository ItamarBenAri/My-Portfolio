import { useMediaQuery } from 'react-responsive';
import useTitle from "../../../Utils/UseTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css';
import { useEffect } from "react";
import { MobileVideoFrame } from "../DeviceFrameArea/MobileVideoFrame/MobileVideoFrame";
import { LaptopVideoFrame } from "../DeviceFrameArea/LaptopVideoFrame/LaptopVideoFrame";
import { MyResumeBtn } from '../MyResumeBtn/MyResumeBtn';
import { myIntroYoutubeUrls } from '../../../Constants/MyIntroYoutubeUrls';

export function HomePage(): JSX.Element {
    useTitle("Itamar Ben Ari | Home");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const isSmallScreen = useMediaQuery({ query: '(max-width: 490px)' });
    const isLargeScreen = useMediaQuery({ query: '(min-width: 490px)' });

    return (
        <div className="HomePage" data-aos="fade-up">
            {isSmallScreen && <MobileVideoFrame youtubeVideoSrc={myIntroYoutubeUrls.mobileUrl} />}
            {isLargeScreen && <LaptopVideoFrame youtubeVideoSrc={myIntroYoutubeUrls.laptopUrl} />}
            <MyResumeBtn />
        </div>
    );
}
