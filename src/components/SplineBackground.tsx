import Spline from '@splinetool/react-spline';

const SplineBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Spline scene="https://prod.spline.design/BtxLdaGccGqNFp2Q/scene.splinecode" />
        </div>
    );
};

export default SplineBackground;
