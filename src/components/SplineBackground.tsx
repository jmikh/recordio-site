import { Component, useState, type ReactNode, type ErrorInfo } from 'react';
import Spline from '@splinetool/react-spline';

/** Catches WebGL / Three.js errors so the rest of the page still renders. */
class WebGLErrorBoundary extends Component<
    { children: ReactNode },
    { hasError: boolean }
> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.warn('[SplineBackground] WebGL unavailable, hiding 3D background.', error, info);
    }

    render() {
        return this.state.hasError ? null : this.props.children;
    }
}

/** Quick canvas probe — returns false when WebGL is disabled / unavailable. */
function isWebGLAvailable(): boolean {
    try {
        const canvas = document.createElement('canvas');
        return !!(
            canvas.getContext('webgl') || canvas.getContext('webgl2')
        );
    } catch {
        return false;
    }
}

const SplineBackground = () => {
    const [loaded, setLoaded] = useState(false);

    // Skip entirely when WebGL is known to be unavailable.
    if (!isWebGLAvailable()) return null;

    return (
        <WebGLErrorBoundary>
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
        </WebGLErrorBoundary>
    );
};

export default SplineBackground;
