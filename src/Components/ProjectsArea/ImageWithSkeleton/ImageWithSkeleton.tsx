import { useState } from "react";
import "./ImageWithSkeleton.css";
import { Skeleton } from "@mui/material";
import Zoom from 'react-medium-image-zoom';

type ImageWithSkeletonProps = {
    src: string;
    alt: string;
};

export function ImageWithSkeleton(props: ImageWithSkeletonProps): JSX.Element {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="ImageWithSkeleton">
            {!loaded && <Skeleton animation="wave" variant="rounded" width={360} height={360}/>}
            <Zoom>
                <img
                    src={props.src}
                    alt={props.alt}
                    style={{ display: loaded ? 'block' : 'none' }}
                    onLoad={() => setLoaded(true)}
                    className="describe-image"
                />
            </Zoom>
        </div>
    );
}
