import { useState } from 'react';
import Header from '../components/Header'
import Hero from '../components/Hero'

import InteractiveShowcase from '../components/features/InteractiveShowcase'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import WaitlistModal from '../components/WaitlistModal'

const Home = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => setIsWaitlistOpen(false);

    return (
        <>
            <Header onJoinWaitlist={openWaitlist} />
            <main>
                <Hero onJoinWaitlist={openWaitlist} />
                {/* <FeatureShowcase /> */}
                <InteractiveShowcase />
                <Pricing onJoinWaitlist={openWaitlist} />
                <FAQ />
            </main>
            <Footer onJoinWaitlist={openWaitlist} />
            <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
        </>
    );
};

export default Home;
