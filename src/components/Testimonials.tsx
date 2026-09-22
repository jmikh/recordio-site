import { CWS_REVIEWS_URL } from '../utils/constants';
import googleLogo from '../assets/logos/google.svg?raw';
import appleLogo from '../assets/logos/apple.svg?raw';
import metaLogo from '../assets/logos/meta.svg?raw';
import deeplineLogo from '../assets/logos/deepline.svg?raw';
import joltLogo from '../assets/logos/jolt.svg?raw';
import mashLogo from '../assets/logos/mash.svg?raw';

interface Company {
    name: string;
    /** Inline SVG markup (single-colour, fills use currentColor). */
    svg?: string;
    /** Raster mark for companies without a usable SVG. Rendered greyscale. */
    png?: string;
    /** Rendered height in px in the logo row. Tuned per mark so they read at the same optical size. */
    height: number;
    /** Show the company name as text next to a mark-only logo. */
    wordmark?: boolean;
}

interface Review {
    name: string;
    title: string;
    company: Company;
    text: string;
    photo?: string;
    gradient: string;
}

const companies = {
    google: { name: 'Google', svg: googleLogo, height: 26 },
    apple: { name: 'Apple', svg: appleLogo, height: 26 },
    meta: { name: 'Meta', svg: metaLogo, height: 22 },
    deepline: { name: 'Deepline', svg: deeplineLogo, height: 20 },
    jolt: { name: 'Jolt', svg: joltLogo, height: 26 },
    mash: { name: 'Mash', svg: mashLogo, height: 24 },
    chorah: { name: 'Chorah Labs', png: '/assets/logos/chorah.png', height: 24, wordmark: true },
} satisfies Record<string, Company>;

const logoRow: Company[] = [
    companies.google,
    companies.apple,
    companies.meta,
    companies.deepline,
    companies.jolt,
    companies.mash,
    companies.chorah,
];

// The one quote that gets set large
const featured: Review = {
    name: 'Jai Toor',
    title: 'Founder',
    company: companies.deepline,
    photo: '/assets/testimonials/jai.jpg',
    text: 'Mind-blowingly effective and easy to use for anyone who hates Loom\'s video recording or Screen Studio\'s editing complexity.',
    gradient: 'from-emerald-400 to-green-600',
};

const reviews: Review[] = [
    {
        name: 'Safa Jebri',
        title: 'Product Design',
        company: companies.apple,
        photo: '/assets/testimonials/safa.jpg',
        text: 'The automatic features are so good that almost no editing is needed. I can save my own formatting settings and reuse them across projects, and share a preview link for feedback before exporting.',
        gradient: 'from-lime-400 to-emerald-600',
    },
    {
        name: 'Hussam Abu-Libdeh',
        title: 'Senior Engineer',
        company: companies.google,
        photo: '/assets/testimonials/hussam.jpg',
        text: 'What an amazing tool for demos! It automatically generates meaningful zooms and edits and gives me the ability to review them in post. Such a time saver!',
        gradient: 'from-violet-400 to-purple-600',
    },
    {
        name: 'Tuan T.',
        title: 'Senior Engineer',
        company: companies.meta,
        photo: '/assets/testimonials/tony.jpg',
        text: 'The UI is sleek, modern, and intuitive. I love how many customization options there are, which gives me a lot of flexibility to create recordings exactly the way I want.',
        gradient: 'from-blue-400 to-cyan-600',
    },
    {
        name: 'Nourhan Shaaban',
        title: 'Founder',
        company: companies.mash,
        photo: '/assets/testimonials/nourhan.jpg',
        text: 'Great tool for demos and walkthroughs. Easy to install, looks polished out of the box, and the zoom feature is a nice touch. Keeping recordings on-brand takes no extra effort.',
        gradient: 'from-pink-400 to-rose-600',
    },
    {
        name: 'Antoine Rahimi',
        title: 'Founder',
        company: companies.chorah,
        photo: '/assets/testimonials/antoine.jpg',
        text: 'I\'ve used plenty of screen recorders but this one is way smoother and produces a professional quality video without any headaches. The framing and spotlight features are great for demo and training videos.',
        gradient: 'from-amber-400 to-orange-600',
    },
    {
        name: 'Arvin Ahmadi',
        title: 'Founder',
        company: companies.jolt,
        photo: '/assets/testimonials/arvin.jpg',
        text: 'Couldn\'t believe how easy it was to make a high-quality product demo with this extension. Loved the zoom and spotlight feature in particular. Highly recommend!',
        gradient: 'from-orange-400 to-red-600',
    },
];

const Logo = ({ company, height }: { company: Company; height?: number }) => {
    const h = height ?? company.height;
    return (
        <span className="company-logo" style={{ height: `${h}px` }} title={company.name}>
            {company.svg ? (
                <span className="company-logo-svg" dangerouslySetInnerHTML={{ __html: company.svg }} />
            ) : (
                <img src={company.png} alt="" className="company-logo-img" />
            )}
            {company.wordmark && <span className="company-logo-text">{company.name}</span>}
            {!company.wordmark && <span className="sr-only">{company.name}</span>}
        </span>
    );
};

const Avatar = ({ review, size = 'w-9 h-9', textSize = 'text-sm' }: { review: Review; size?: string; textSize?: string }) =>
    review.photo ? (
        <img src={review.photo} alt="" className={`${size} rounded-full object-cover shrink-0`} />
    ) : (
        <span className={`${size} rounded-full bg-linear-to-br ${review.gradient} flex items-center justify-center shrink-0 text-white font-bold ${textSize}`} aria-hidden="true">
            {review.name.charAt(0)}
        </span>
    );

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 section-panel">
            <div className="max-w-7xl mx-auto px-6">
                {/* Logo row */}
                <div className="logo-cloud">
                    <p className="logo-cloud-label">Trusted by people at</p>
                    <ul className="logo-row" aria-label="Companies where Recordio users work">
                        {logoRow.map((c) => (
                            <li key={c.name}><Logo company={c} /></li>
                        ))}
                    </ul>
                </div>

                {/* Featured quote */}
                <figure className="quote-hero mt-16 lg:mt-20">
                    <blockquote className="quote-hero-text">
                        “{featured.text}”
                    </blockquote>
                    <figcaption className="quote-hero-caption">
                        <Avatar review={featured} size="w-12 h-12" textSize="text-lg" />
                        <span className="reviewer">
                            <span className="reviewer-name">{featured.name}</span>
                            <span className="reviewer-role">{featured.title}, {featured.company.name}</span>
                        </span>
                        <span className="quote-hero-sep" aria-hidden="true" />
                        <Logo company={featured.company} height={18} />
                    </figcaption>
                </figure>

                {/* Rail */}
                <ul className="review-rail mt-16 lg:mt-20">
                    {reviews.map((r) => (
                        <li key={r.name} className="review-item">
                            <blockquote className="review-text">“{r.text}”</blockquote>
                            <div className="review-foot">
                                <Avatar review={r} size="w-8 h-8" textSize="text-xs" />
                                <span className="reviewer">
                                    <span className="reviewer-name">{r.name}</span>
                                    <span className="reviewer-role">{r.title}, {r.company.name}</span>
                                </span>
                                <Logo company={r.company} height={r.company.wordmark ? 14 : 16} />
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-12 text-center">
                    <a
                        href={CWS_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <img src="/assets/chrome-store.svg" alt="" className="w-4 h-4" />
                        Rated 5.0 on the Chrome Web Store
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
