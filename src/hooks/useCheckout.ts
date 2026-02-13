import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { trackEvent } from '../utils/analytics';
import type { User } from '@supabase/supabase-js';

type Interval = 'monthly' | 'yearly';

export function useCheckout() {
    const [checkoutLoading, setCheckoutLoading] = useState(false);

    const startCheckout = async (user: User, interval: Interval) => {
        setCheckoutLoading(true);

        try {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                console.error('[Checkout] No active session');
                setCheckoutLoading(false);
                return;
            }

            const { data, error } = await supabase.functions.invoke('create-checkout-session', {
                body: {
                    userId: user.id,
                    userEmail: user.email,
                    interval,
                    successUrl: `${window.location.origin}/subscription-success?session_id={CHECKOUT_SESSION_ID}`,
                    cancelUrl: `${window.location.origin}/#pricing`,
                },
            });

            if (error) {
                // Try to read the response body for detailed error info
                const errorBody = error.context instanceof Response
                    ? await error.context.json().catch(() => null)
                    : null;
                console.error('[Checkout] Edge function error:', error.message);
                console.error('[Checkout] Error details:', errorBody);
                trackEvent('checkout_error', {
                    event_category: 'purchase',
                    error_message: errorBody?.error || error.message,
                });
                setCheckoutLoading(false);
                return;
            }

            if (data?.url) {
                window.location.href = data.url;
            } else {
                console.error('[Checkout] No URL returned:', data);
                setCheckoutLoading(false);
            }
        } catch (err) {
            console.error('[Checkout] Unexpected error:', err);
            setCheckoutLoading(false);
        }
    };

    return { startCheckout, checkoutLoading };
}
