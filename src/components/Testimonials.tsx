import { useScrollReveal } from '../hooks/useScrollReveal';

const reviews = [
    {
        name: 'John Jenkins',
        text: 'Incredible snappy extension',
        gradient: 'from-blue-400 to-indigo-600',
    },
    {
        name: 'Nourhan Shaaban',
        photo: '/assets/testimonials/nourhan.jpg',
        text: 'Great tool for demos and walkthroughs. Easy to install, looks polished out of the box, and the zoom feature is a nice touch. Flexible enough to customize without overcomplicating things, and keeping recordings on-brand takes no extra effort.',
        gradient: 'from-pink-400 to-rose-600',
    },
    {
        name: 'Sepehr Antoine Rahimi',
        text: 'I\'ve used plenty of screen recorders but this one way smoother and produces a professional quality video without any headaches. The framing and spotlight features are especially great for creating demo and training videos!',
        gradient: 'from-amber-400 to-orange-600',
    },
    {
        name: 'Hussam Abu-Libdeh',
        text: 'What an amazing tool for demos!! I love that it automatically generates meaningful zooms and edits and gives me the ability to review them in post. Such a time saver!',
        gradient: 'from-violet-400 to-purple-600',
    },
    {
        name: 'Ahmed ElMoghazy',
        text: 'High quality software with nice features for screen recording.',
        gradient: 'from-cyan-400 to-blue-600',
    },
    {
        name: 'Candide',
        text: 'Pretty easy to use if you ask me! I like how everything just works behind the scene and I don\'t have to put a lot of effort in edits / after effects just focus on making my video. Product demos will be much different moving forward.',
        gradient: 'from-fuchsia-400 to-pink-600',
    },
    {
        name: 'Safa Jebri',
        photo: '/assets/testimonials/safa.jpg',
        text: 'Super useful!\nThe automatic features are so good that almost no editing needed. I love that I can save my own formatting settings so that I can reuse them across videos/projects.\nI also really like that I can create links to share a preview of my videos with others for feedback before exporting the finished product.',
        gradient: 'from-lime-400 to-emerald-600',
    },
    {
        name: 'Ramy Zeid',
        photo: '/assets/testimonials/ramy.jpg',
        text: 'Great time saver! It smoothly recorded my walkthrough and already did an edited video that gave me full set of tools to adjust how I want it. Very intuitive and easy to use as well. Hope they do a version that can join meetings well to record them with other people to collaborate with other teams.',
        gradient: 'from-orange-400 to-red-600',
    },
    {
        name: 'Mark Andrawis',
        photo: '/assets/testimonials/mark.jpg',
        text: 'Excellent product - Easy to use and very intuitive.',
        gradient: 'from-sky-400 to-blue-600',
    },
    {
        name: 'Abdelrahman Elbashandy',
        photo: '/assets/testimonials/abdelrahman.jpg',
        text: 'To the point! Very simple to use. The features are well thought out. I don\'t need to do background work to make it look professional. Recordio makes it ready to go live right away. Exactly what I was looking for!',
        gradient: 'from-teal-400 to-cyan-600',
    },
    {
        name: 'Irene Rodríguez Pérez',
        text: 'Practical and super easy to use, loved it! Will use it a lot',
        gradient: 'from-rose-400 to-pink-600',
    },
    {
        name: 'Adham Kalila',
        text: 'This is much easier than microsoft stream or other screen recordings ive used as an instructor at my SaaS company. Easy to install and edit. And it does automatic zooming in to where i need the audiences attention. Definitely going to use this more.',
        gradient: 'from-indigo-400 to-violet-600',
    },
    {
        name: 'Jason Chou',
        text: 'I didn\'t know it was possible to have a screen recording AND editing tool AS A CHROME EXTENSION. This is a game changer! The super intuitive editor with auto zoom and spotlight feature makes the whole process a breeze. I was able to get a product demo video done with zero friction.',
        gradient: 'from-emerald-400 to-green-600',
    },
    {
        name: 'Arvin Ahmadi',
        photo: '/assets/testimonials/arvin.jpg',
        text: 'Couldn\'t believe how easy it was to make a high-quality product demo with this extension. Loved the zoom/spotlight feature in particular. Highly recommend!',
        gradient: 'from-amber-400 to-yellow-600',
    },
    {
        name: 'Lauren Wilson',
        photo: '/assets/testimonials/lauren.png',
        text: 'I use it for creating clean software demos and tutorials. The automatic zoom, spotlight, and captions make recordings much easier to follow without spending hours editing.',
        gradient: 'from-purple-400 to-fuchsia-600',
    },
    {
        name: 'Dijvar Donmez',
        text: 'Simple, fast, and very easy to use. Recordio makes screen recording effortless and perfect for quick demos or explanations. Really useful tool.',
        gradient: 'from-red-400 to-orange-600',
    },
    {
        name: 'Kardelen Güldaş',
        photo: '/assets/testimonials/kardalen.jpg',
        text: 'Recordio is one of the easiest screen recording tools I\'ve used. It\'s fast, intuitive, and the recordings look polished without needing much editing. The zoom and spotlight features make it great for demos and tutorials.\nSimple, effective, and a big time saver.',
        gradient: 'from-blue-400 to-cyan-600',
    },
];

const Star = () => (
    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const ChromeIcon = () => (
    <img src="/assets/chrome-store.svg" alt="Chrome Web Store" className="w-5 h-5" />
);

const Testimonials = () => {
    const headerRef = useScrollReveal();

    // Split reviews into two rows for the marquee
    const mid = Math.ceil(reviews.length / 2);
    const row1 = reviews.slice(0, mid);
    const row2 = reviews.slice(mid);

    const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
        <div className="testimonial-card">
            {/* Header: avatar + name left, stars right */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2.5">
                    {review.photo ? (
                        <img
                            src={review.photo}
                            alt={review.name}
                            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        />
                    ) : (
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold text-xs">
                                {review.name.charAt(0)}
                            </span>
                        </div>
                    )}
                    <span className="font-semibold text-text-highlighted text-sm">
                        {review.name}
                    </span>
                </div>
                <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} />)}
                </div>
            </div>

            {/* Review text */}
            <p className="text-text-main leading-relaxed text-[0.935rem] whitespace-pre-line">
                {review.text}
            </p>
        </div>
    );

    return (
        <section id="testimonials" className="py-24 section-panel relative overflow-hidden">
            <div className="relative z-10">
                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-16 scroll-reveal px-6">
                    {/* Chrome Web Store badge */}
                    <a
                        href="https://chromewebstore.google.com/detail/recordio-smart-screen-rec/bbcdpipjplklaneplfmlhhibnllhinii/reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-raised/80 border border-border mb-6 transition-colors duration-200 hover:border-border-highlighted"
                    >
                        <ChromeIcon />
                        <div className="flex">
                            {[...Array(5)].map((_, i) => <Star key={i} />)}
                        </div>
                        <span className="text-text-highlighted font-semibold text-sm">5.0</span>
                        <span className="text-text-muted text-sm">on Chrome Web Store</span>
                    </a>

                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        Loved by Real Users
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        5 stars across every review. Here's what people are saying.
                    </p>
                </div>

                {/* Scrolling marquee with fade edges */}
                <div className="testimonial-marquee-wrapper">
                    <div className="testimonial-marquee">
                        <div className="testimonial-marquee-track">
                            {reviews.map((r, i) => <ReviewCard key={`a-${i}`} review={r} />)}
                            {reviews.map((r, i) => <ReviewCard key={`b-${i}`} review={r} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

