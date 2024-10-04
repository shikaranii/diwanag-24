import React from 'react';
import '../styles/globals.css'
import Backgrounds from '../components/Backgrounds';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [bgIndex, setBgIndex] = React.useState(0);
  
  return (
    <AnimatePresence>
      <div key={router.asPath}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Backgrounds bgIndex={bgIndex} />
          <main>
            <Component {...pageProps} setBgIndex={setBgIndex} />
          </main>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
