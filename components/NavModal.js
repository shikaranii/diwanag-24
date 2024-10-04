import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import art_deets from '../data/art_deets'; // Ensure this file contains the artworks
import localFont from 'next/font/local';

// Import local font
const myFont = localFont({ src: '../public/fonts/Hummer Miller Demo.otf' });

const ArtModal = ({ isVisible, close }) => {
  const router = useRouter();
  const modalContentRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      close(); 
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            overflow: "auto",
          }}
          onClick={handleClickOutside}
        >
          <div ref={modalContentRef}>
            <Grid container justifyContent="center" alignItems="center" spacing={4} direction="column">
              <Grid item>
                <img src="/assets/Clover.png" alt="Clover" />
              </Grid>

              {/* Map through the artworks and display each one as clickable text */}
              {art_deets.map((artwork) => (
                <Grid item key={artwork.id}>
                  <motion.p
                    className={myFont.className} // Apply the "Architects Daughter" font
                    style={{
                      cursor: 'pointer',
                      fontSize: '1.8rem', // Adjust text size if needed
                      color: 'rgba(80, 27, 11, 1)',
                      textAlign: 'center',
                    }}
                    onClick={() => router.push(`/${artwork.id}`)} // Dynamic routing for each artwork
                    whileHover={{ scale: 1.1 }} // Optional hover animation
                    whileTap={{ scale: 0.9 }} // Optional tap animation
                  >
                    {artwork.title}
                  </motion.p>
                </Grid>
              ))}

              <Grid item>
                <p
                  onClick={() => close()} // Close button
                  style={{
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Close
                </p>
              </Grid>
            </Grid>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtModal;
