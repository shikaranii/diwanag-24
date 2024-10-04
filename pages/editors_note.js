import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAnimation, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import HomeModal from '../components/HomeModal';
import localFont from 'next/font/local';

// Import local fonts
const archisDaughter = localFont({ src: '../public/fonts/ArchitectsDaughter.ttf' });
const hummerMiller = localFont({ src: '../public/fonts/Hummer Miller Demo.otf' });

const EditorsNote = () => {
  const [modal, setModal] = useState(false);
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    controls.start({
      filter: modal ? 'blur(10px)' : 'blur(0px)',  // Apply blur based on modal state
    });
  }, [modal, controls]);

  const handleBackToHome = async () => {
    // Trigger exit animation before navigating
    await controls.start({
      opacity: 0,
      y: 20, // Move down slightly
      transition: { duration: 0.5, ease: "easeIn" }, // Smooth transition out
    });

    // Navigate back to the home page
    router.push('/');
  };

  return (
    <>
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/assets/Main_BG.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1, // Ensure it stays behind other content
        }}
      />

      {/* Main content with framer-motion for smooth entry and exit */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }} // Start with a slight vertical offset and invisible
        exit={{ opacity: 0, y: 20 }} // Add exit animation for smooth transition
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth entry transition
        className={archisDaughter.className} // Apply ArchitectsDaughter font to entire content
        style={{ 
          padding: '2rem', 
          filter: modal ? 'blur(10px)' : 'blur(0px)', 
          display: 'flex', 
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
          height: '80vh', // Ensure it takes a good amount of space
        }}
      >
        {/* Replace image with div containing text and background */}
        <motion.div
          style={{
            backgroundImage: 'url("/assets/Notebook BG.png")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '2rem',
            width: '70%', 
            maxWidth: '900px', 
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)', 
            borderRadius: '8px', 
            color: 'rgba(80, 27, 11, 1)', 
          }}
        >
          {/* Heading with Hummer Miller font */}
          <h1
            className={hummerMiller.className} 
            style={{
              fontSize: '2.5rem', 
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Editor's Note
          </h1>

          {/* Body text */}
          <p
            style={{
              fontSize: '1.2rem', 
              lineHeight: '1.6', 
              textAlign: 'justify', 
            }}
          >
            When Alice from Alice in Wonderland was lured into falling down the rabbit hole due to her curiosity, she experienced things she never thought were even possible. Similarly, unbeknownst to us, we encounter these rabbit holes that may take us to a whimsical domain, the somber reality, or even between these realms. As the passage of time dramatically evolved, the context of a 'rabbit hole' from simply being an allegory to a famous fiction book to an expression of engrossment and obsession among a few, we descend into a process of breaking free from the mundane, uncovering uncomfortable truths, and seeking personal transformation.
          </p>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              marginTop: '1rem', 
            }}
          >
            With art as one of the channels through which we can experience being curiouser and curiouser, we open the opportunity to be engulfed into our own rabbit holes, as well as immersing others into the spiral. We let ourselves and others enter a paradox — where we weigh the limits of our reality and explore the unknown. Art, thus, enables us to articulate the unfettered emotions of each distinctive rabbit hole, connecting us to worlds beyond ours.
          </p>

          {/* Signature with Hummer Miller font */}
          <div
            style={{
              marginTop: '2rem', 
              textAlign: 'right', 
            }}
          >
            <p
              className={hummerMiller.className} 
              style={{
                fontSize: '1.8rem', 
                marginBottom: '0.2rem',
              }}
            >
              Heart Haezel Gacayan
            </p>
            <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>
              Editor-in-Chief AY 2023-2024
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Arrow button with smooth transition back to home */}
      <Grid
        container
        justifyContent="flex-end"
        style={{
          position: 'absolute',
          bottom: '3%',
          right: '2%',
          padding: '1px',
        }}
      >
        <motion.img
          src="/assets/Arrow_button.svg"
          alt="Arrow Icon"
          onClick={handleBackToHome} 
          style={{
            cursor: 'pointer',
            width: '15vw',  
            height: 'auto', 
            maxWidth: '75px',  
          }}
          whileHover={{ scale: 1.1 }}  
        />
      </Grid>

      {/* Modal */}
      <HomeModal isVisible={modal} close={() => setModal(false)} />
    </>
  );
};

export default EditorsNote;
