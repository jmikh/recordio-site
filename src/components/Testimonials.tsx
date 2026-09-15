import { CWS_REVIEWS_URL } from '../utils/constants';

interface Review {
    name: string;
    text: string;
    photo?: string;
    gradient: string;
}

// The one quote that gets set large
const featured: Review = {
    name: 'Jason Chou',
    text: 'I didn\'t know it was possible to have a screen recording and editing tool as a Chrome extension. The intuitive editor with auto zoom and spotlight makes the whole process a breeze. I got a product demo done with zero friction.',
    gradient: 'from-emerald-400 to-green-600',
};

// The wall, ordered so photos land in every column
const reviews: Review[] = [
    {
        name: 'Nourhan Shaaban',
        photo: '/assets/testimonials/nourhan.jpg',
        text: 'Great tool for demos and walkthroughs. Easy to install, looks polished out of the box, and the zoom feature is a nice touch. Keeping recordings on-brand takes no extra effort.',
        gradient: 'from-pink-400 to-rose-600',
    },
    {
        name: 'Hussam Abu-Libdeh',
        text: 'What an amazing tool for demos!! I love that it automatically generates meaningful zooms and edits and gives me the ability to review them in post. Such a time saver!',
        gradient: 'from-violet-400 to-purple-600',
    },
    {
        name: 'Safa Jebri',
        photo: '/assets/testimonials/safa.jpg',
        text: 'The automatic features are so good that almost no editing is needed. I love that I can save my own formatting settings and reuse them across projects, and share a preview link for feedback before exporting.',
        gradient: 'from-lime-400 to-emerald-600',
    },
    {
        name: 'Sepehr Antoine Rahimi',
        text: 'I\'ve used plenty of screen recorders but this one is way smoother and produces a professional quality video without any headaches. The framing and spotlight features are great for demo and training videos.',
        gradient: 'from-amber-400 to-orange-600',
    },
    {
        name: 'Ramy Zeid',
        photo: '/assets/testimonials/ramy.jpg',
        text: 'Great time saver! It smoothly recorded my walkthrough and already had an edited video ready, with a full set of tools to adjust how I want it. Very intuitive.',
        gradient: 'from-orange-400 to-red-600',
    },
    {
        name: 'Adham Kalila',
        text: 'Much easier than Microsoft Stream or other screen recorders I\'ve used as an instructor at my SaaS company. It automatically zooms in to where I need the audience\'s attention.',
        gradient: 'from-indigo-400 to-violet-600',
    },
    {
        name: 'Abdelrahman Elbashandy',
        photo: '/assets/testimonials/abdelrahman.jpg',
        text: 'To the point! Very simple to use. I don\'t need to do background work to make it look professional. Recordio makes it ready to go live right away.',
        gradient: 'from-teal-400 to-cyan-600',
    },
    {
        name: 'Lauren Wilson',
        photo: '/assets/testimonials/lauren.png',
        text: 'I use it for clean software demos and tutorials. The automatic zoom, spotlight, and captions make recordings much easier to follow without spending hours editing.',
        gradient: 'from-purple-400 to-fuchsia-600',
    },
    {
        name: 'Kardelen Güldaş',
        photo: '/assets/testimonials/kardalen.jpg',
        text: 'One of the easiest screen recording tools I\'ve used. Fast, intuitive, and the recordings look polished without much editing. Simple, effective, and a big time saver.',
        gradient: 'from-blue-400 to-cyan-600',
    },
];

const Star = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg className={`${className} text-secondary`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const Avatar = ({ review, size = 'w-9 h-9' }: { review: Review; size?: string }) =>
    review.photo ? (
        <img src={review.photo} alt="" className={`${size} rounded-full object-cover shrink-0`} />
    ) : (
        <span className={`${size} rounded-full bg-linear-to-br ${review.gradient} flex items-center justify-center shrink-0 text-white font-bold text-sm`} aria-hidden="true">
            {review.name.charAt(0)}
        </span>
    );

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 section-panel">
            <div className="max-w-7xl mx-auto px-6">
                {/* Giant quote */}
                <figure className="quote-hero">
                    <div className="flex justify-center gap-1 mb-6" aria-label="5 out of 5 stars">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5" />)}
                    </div>
                    <blockquote className="quote-hero-text">
                        “{featured.text}”
                    </blockquote>
                    <figcaption className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                        <Avatar review={featured} />
                        <span className="font-semibold text-text-highlighted">{featured.name}</span>
                        <span className="text-text-muted">· Chrome Web Store review</span>
                    </figcaption>
                </figure>

                {/* Wall */}
                <div className="section-head mt-24">
                    <span className="eyebrow">Reviews</span>
                    <h2 className="section-title">Five stars, every single review.</h2>
                </div>

                <div className="review-wall">
                    {reviews.map((r) => (
                        <figure key={r.name} className="review-card">
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} />)}
                            </div>
                            <blockquote className="review-text">{r.text}</blockquote>
                            <figcaption className="mt-4 flex items-center gap-2.5">
                                <Avatar review={r} size="w-8 h-8" />
                                <span className="font-semibold text-sm text-text-highlighted">{r.name}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href={CWS_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <img src="/assets/chrome-store.svg" alt="" className="w-4 h-4" />
                        Read every review on the Chrome Web Store
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
