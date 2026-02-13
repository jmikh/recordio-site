import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

/**
 * Handles the OAuth redirect from Google/Supabase.
 * After Supabase processes the auth tokens from the URL hash,
 * redirects to the path specified in the ?redirect= param (or /).
 */
const AuthCallback = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const handleCallback = async () => {
            // Supabase auto-detects the hash fragment and sets the session
            const { error } = await supabase.auth.getSession();

            if (error) {
                console.error('[AuthCallback] Error getting session:', error.message);
            }

            // Redirect to the original destination
            const redirectPath = searchParams.get('redirect') || '/';
            navigate(redirectPath, { replace: true });
        };

        handleCallback();
    }, [navigate, searchParams]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-text-muted">Signing you in...</p>
            </div>
        </div>
    );
};

export default AuthCallback;
