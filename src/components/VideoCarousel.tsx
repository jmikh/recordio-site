import { useEffect, useRef } from 'react';

const VideoCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroll = scrollRef.current;
        if (!scroll) return;

        let animationId: number;
        let scrollPosition = 0;

        const animate = () => {
            scrollPosition += 0.5;
            if (scroll) {
                scroll.scrollLeft = scrollPosition;
                // Reset when we've scrolled past the first set
                if (scrollPosition >= scroll.scrollWidth / 2) {
                    scrollPosition = 0;
                }
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    const videos = [
        { id: 1, title: 'Product Demo', duration: '2:34', thumbnail: 'bg-gradient-to-br from-purple-500 to-pink-500' },
        { id: 2, title: 'Tutorial Video', duration: '5:12', thumbnail: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
        { id: 3, title: 'Team Meeting', duration: '15:47', thumbnail: 'bg-gradient-to-br from-green-500 to-emerald-500' },
        { id: 4, title: 'Bug Report', duration: '1:23', thumbnail: 'bg-gradient-to-br from-orange-500 to-red-500' },
        { id: 5, title: 'Code Review', duration: '8:56', thumbnail: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
        { id: 6, title: 'Presentation', duration: '12:34', thumbnail: 'bg-gradient-to-br from-pink-500 to-rose-500' },
    ];

    // Duplicate for seamless loop
    const allVideos = [...videos, ...videos];

    return (
        <section id="examples" className="py-24 bg-surface relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Section Header */}
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-highlighted mb-4">
                        See Recordio in <span className="gradient-text">Action</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        From quick demos to full presentations—capture anything on your screen with crystal-clear quality
                    </p>
                </div>

                {/* Scrolling Carousel */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex space-x-6 overflow-x-hidden px-6"
                        style={{ scrollBehavior: 'auto' }}
                    >
                        {allVideos.map((video, index) => (
                            <div
                                key={`${video.id}-${index}`}
                                className="flex-shrink-0 group"
                            >
                                <div className="w-[400px] h-[225px] rounded-2xl overflow-hidden card-premium cursor-pointer">
                                    {/* Video Thumbnail */}
                                    <div className={`relative w-full h-full ${video.thumbnail} flex items-center justify-center`}>
                                        {/* Play button overlay */}
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
                                                <svg className="w-8 h-8 text-surface-body ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Duration badge */}
                                        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-sm">
                                            <span className="text-white text-sm font-medium">{video.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Video Info */}
                                <div className="mt-4 px-2">
                                    <h3 className="text-lg font-semibold text-text-highlighted">{video.title}</h3>
                                    <p className="text-text-muted text-sm">Recorded with Recordio</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient fade edges */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-surface to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default VideoCarousel;
