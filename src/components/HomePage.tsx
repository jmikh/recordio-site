import Header from './Header';
import Hero from './Hero';
import BeforeAfterComparison from './BeforeAfterComparison';
import InteractiveShowcase from './features/InteractiveShowcase';
import FeatureBento from './features/FeatureBento';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <BeforeAfterComparison />
                <InteractiveShowcase />
                <FeatureBento />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
