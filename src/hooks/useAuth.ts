import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signInWithGoogle = async (redirectPath?: string) => {
        const redirectTo = `${window.location.origin}/auth/callback${redirectPath ? `?redirect=${encodeURIComponent(redirectPath)}` : ''}`;

        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo },
        });

        if (error) {
            console.error('[Auth] Google sign-in error:', error.message);
        }
    };

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    return { user, loading, signInWithGoogle, signOut };
}
