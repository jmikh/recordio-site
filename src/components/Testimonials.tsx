import { useScrollReveal } from '../hooks/useScrollReveal';

const reviews = [
    {
        name: 'Paper Lemon',
        photo: '/assets/testimonials/paperlemon.jpg',
        text: 'I found Recordio while looking for a screen recorder to make tutorials and demos for a digital product I\'m working on. Tried a couple of other tools first but they all felt a bit heavy and overcomplicated for what I needed.\n\nRecordio is just simpler. It loads fast, the interface makes sense straight away and it doesn\'t feel like overkill. What surprised me was how much it helps with making recordings look polished without needing to do a ton of editing after. The auto zoom and spotlight features are genuinely useful when you\'re walking someone through something on screen. Little things like being able to change the canvas size, background color and add mouse click sounds also make a bigger difference than you\'d expect for tutorial-style content.\n\nI also figured out you can crop to portrait mode in the screen settings which is handy for making reels or shorts.\n\nOverall it strikes a good balance between being simple to use and still giving you enough control to make things look good. Happy with it so far.',
        gradient: 'from-emerald-400 to-teal-600',
    },
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
    const gridRef = useScrollReveal();

    return (
        <section id="testimonials" className="py-24 bg-surface-body relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-16 scroll-reveal">
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
                        Loved by <span className="gradient-text">Real Users</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        5 stars across every review. Here's what people are saying.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div ref={gridRef} className="masonry-grid scroll-reveal scroll-reveal-delay-2">
                    {reviews.map((review, index) => (
                        <div key={index} className="card-premium mb-6 break-inside-avoid">
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
