import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

const Backgrounds = ({ bgIndex }) => {
  return (
    <AnimatePresence>
      { bgIndex === 0 && (
        <motion.div
          key="landing_bg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ 
            backgroundImage: `url(/Main_BG.png)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            width: '100vw', 
            height: '100vh',
            position: 'fixed',
            zIndex: -1,
            top: 0,
            left: 0
          }} 
        />
      ) }
      
      { bgIndex === 2 && (
        <motion.div
          key="art_bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ 
            backgroundImage: `url(/Notebook BG.png)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            width: '100vw', 
            height: '100vh',
            position: 'fixed',
            zIndex: -1,
            top: 0,
            left: 0
          }} 
        />
      ) }
      
      { bgIndex === 2 && (
        <motion.div 
          key="artist_bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ 
            backgroundImage: `url(/Notebook BG.png)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            width: '100vw', 
            height: '100vh',
            position: 'fixed',
            zIndex: -1,
            top: 0,
            left: 0
          }} 
        />
      ) }
    </AnimatePresence>
  )
}

export default Backgrounds;