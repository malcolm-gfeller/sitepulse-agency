import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans antialiased text-white bg-black selection:bg-brand-cyan selection:text-black w-full overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-green z-[100] origin-left"
        style={{ scaleX }}
      />
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Pricing />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <CaseStudies />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Team />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <ChatWidget />

    </div>
  );
}

export default App;