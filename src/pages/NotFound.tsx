import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <>
            <SEO
                title="Page Not Found — Recordio"
                description="The page you're looking for doesn't exist."
                path="/404"
            />
            <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
                {/* Animated Background */}
                <div className="absolute inset-0 animated-gradient" />
                <div className="absolute inset-0 gradient-mesh opacity-60" />

                {/* Content */}
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-8xl md:text-9xl font-bold text-primary-highlighted mb-4">
                        404
                    </h1>
                    <p className="text-2xl md:text-3xl text-text-highlighted font-semibold mb-2">
                        Page Not Found
                    </p>
                    <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="btn-primary inline-flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
