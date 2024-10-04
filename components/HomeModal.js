import React, { useRef } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import art_deets from '../data/art_deets';

const HomeModal = ({ isVisible, close }) => {
  const router = useRouter();
  const modalContentRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      close();
    }
  };

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
            fontFamily: "ArchitectsDaughter",
          }}
          onClick={handleClickOutside}
        >
          <div ref={modalContentRef}>
            <Grid container justifyContent="center" alignItems="center" height="100%" direction="column" spacing={12}>
              <Grid item>
                <img src="/assets/Clover.png" alt="Clover" />
              </Grid>
              <Grid item container justifyContent="center" spacing={4}>
                <Grid item>
                  {/* Art Works Button using an Image */}
                  <motion.img
                    src="/assets/art_works.png" // Image for Art Works
                    alt="Art Works"
                    style={{
                      cursor: 'pointer',
                      width: 'auto', // Keeping the width auto to ensure proportional scaling
                      height: '50px', // Set a consistent height
                    }}
                    onClick={() => { router.push(`/${art_deets[0].id}`); }}
                    whileHover={{ scale: 1.1 }} // Optional hover animation
                    whileTap={{ scale: 0.9 }} // Optional tap animation
                  />
                </Grid>

                <Grid item>
                  {/* Editor's Note Button using an Image */}
                  <motion.img
                    src="/assets/editors_button.png" // Image for Editor's Note
                    alt="Editor's Note"
                    style={{
                      cursor: 'pointer',
                      width: 'auto', // Keeping the width auto to ensure proportional scaling
                      height: '50px', // Set a consistent height
                    }}
                    onClick={() => {
                      close(); // Close the modal first
                      setTimeout(() => {
                        router.push(`/editors_note`); // Navigate to Editor's Note after a slight delay for smooth transition
                      }, 300);
                    }}
                    whileHover={{ scale: 1.1 }} // Optional hover animation
                    whileTap={{ scale: 0.9 }} // Optional tap animation
                  />
                </Grid>
              </Grid>
            </Grid>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeModal;
