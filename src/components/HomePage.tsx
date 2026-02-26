import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import InteractiveShowcase from './features/InteractiveShowcase';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';
import WaitlistModal from './WaitlistModal';

const HomePage = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => setIsWaitlistOpen(false);

    return (
        <>
            <Header onJoinWaitlist={openWaitlist} />
            <main>
                <Hero onJoinWaitlist={openWaitlist} />
                <InteractiveShowcase />
                <Pricing onJoinWaitlist={openWaitlist} />
                <FAQ />
            </main>
            <Footer onJoinWaitlist={openWaitlist} />
            <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
        </>
    );
};

export default HomePage;
