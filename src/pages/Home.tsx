import Header from '../components/Header'
import Hero from '../components/Hero'
import FeatureShowcase from '../components/FeatureShowcase'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <FeatureShowcase />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default Home;
