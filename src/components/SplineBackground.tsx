import { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.8s ease-in',
            }}
        >
            <Spline
                scene="https://prod.spline.design/BtxLdaGccGqNFp2Q/scene.splinecode"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

export default SplineBackground;
