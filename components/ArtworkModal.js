import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Grid from '@mui/material/Grid';

const ArtworkModal = ({ isVisible, close, artwork }) => {
  if (!artwork) return null; // If no artwork data, don't render anything

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <Grid container justifyContent="center" alignItems="center" direction="column">
            <Grid item>
              <img src={artwork.image} alt={artwork.title} style={{ maxWidth: '80vw', maxHeight: '80vh' }} />
            </Grid>
            <Grid item>
              <h2 style={{ color: 'white' }}>{artwork.title}</h2>
              <p style={{ color: 'white' }}>{artwork.description}</p>
            </Grid>
            <Grid item>
              <button onClick={close} style={{ fontSize: '1rem', color: 'white', cursor: 'pointer' }}>
                Close
              </button>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtworkModal;
