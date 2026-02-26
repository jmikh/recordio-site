import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

/**
 * Handles the OAuth redirect from Google/Supabase.
 * After Supabase processes the auth tokens from the URL hash,
 * redirects to the path specified in the ?redirect= param (or /).
 */
const AuthHandler = () => {
    useEffect(() => {
        const handleCallback = async () => {
            const { error } = await supabase.auth.getSession();

            if (error) {
                console.error('[AuthCallback] Error getting session:', error.message);
            }

            const searchParams = new URLSearchParams(window.location.search);
            const redirectPath = searchParams.get('redirect') || '/';
            window.location.href = redirectPath;
        };

        handleCallback();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-text-muted">Signing you in...</p>
            </div>
        </div>
    );
};

export default AuthHandler;
