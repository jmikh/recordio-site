import Header from '../components/Header'
import Hero from '../components/Hero'
import VideoCarousel from '../components/VideoCarousel'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <VideoCarousel />
                <Features />
                <Testimonials />
                <Pricing />
            </main>
            <Footer />
        </>
    );
};

export default Home;
