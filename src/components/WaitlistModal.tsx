import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

type ModalState = 'idle' | 'loading' | 'success' | 'error';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
    const [email, setEmail] = useState('');
    const [state, setState] = useState<ModalState>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input on open, reset on close
    useEffect(() => {
        if (isOpen) {
            setState('idle');
            setEmail('');
            setErrorMessage('');
            // Small delay so the element is rendered before focusing
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, onClose]);

    const isValidEmail = (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const trimmed = email.trim();
        if (!isValidEmail(trimmed)) {
            setState('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setState('loading');

        const { error } = await supabase
            .from('waitlist')
            .insert({ email: trimmed });

        if (error) {
            if (error.code === '23505') {
                // Unique constraint violation — already on the list
                setState('success');
                setErrorMessage("You're already on the waitlist!");
            } else {
                setState('error');
                setErrorMessage('Something went wrong. Please try again.');
            }
            return;
        }

        setState('success');
        setErrorMessage('');
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-full max-w-md rounded-2xl border border-border bg-surface-raised p-8 shadow-2xl animate-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-text-muted hover:text-text-highlighted transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {state === 'success' ? (
                    /* ── Success state ── */
                    <div className="text-center py-4">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-text-highlighted mb-2">You're in!</h3>
                        <p className="text-text-muted">
                            {errorMessage || "We'll notify you as soon as Recordio is ready."}
                        </p>
                    </div>
                ) : (
                    /* ── Form state ── */
                    <>
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-primary-highlighted mb-2">Join the Waitlist</h3>
                            <p className="text-text-muted text-sm">
                                Be the first to know when Recordio launches.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    ref={inputRef}
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (state === 'error') {
                                            setState('idle');
                                            setErrorMessage('');
                                        }
                                    }}
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-highlighted placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                                    disabled={state === 'loading'}
                                />
                                {state === 'error' && errorMessage && (
                                    <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={state === 'loading'}
                                className="btn-primary w-full flex items-center justify-center gap-2"
                            >
                                {state === 'loading' ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-text-on-primary border-t-transparent rounded-full animate-spin" />
                                        <span>Joining...</span>
                                    </>
                                ) : (
                                    'Join Waitlist'
                                )}
                            </button>
                        </form>

                        <p className="text-center text-text-muted text-xs mt-4">
                            No spam, ever. We'll only email you when we launch.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;
