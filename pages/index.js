import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useAnimation, motion } from 'framer-motion';
import HomeModal from '../components/HomeModal';
const Home = () => {
  const [modal, setModal] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      filter: modal ? 'blur(10px)' : 'blur(0px)',  // Apply blur based on modal state
    });
  }, [modal, controls]);

  return (
    <>
      {/* Background image (background.png) */}
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

      {/* Main content */}
      <Grid
        component={motion.div}
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={2}
        animate={controls}
        style={{ height: '100vh', width: '100vw' }}
      >
        <Grid item>
          <img
            layout="responsive"
            src="/assets/Typeface w Logo (Brown).png"
            alt="Down The Rabbit Hole Logo"
            style={{
              width: 'auto',
              maxWidth: '50vw',
              height: 'auto',
              maxHeight: '50vh',
              margin: '0 auto',
              display: 'block',
            }}
          />
        </Grid>
      </Grid>

      {/* Arrow button */}
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
    src="/assets/Button2.svg"
    alt="Clover Icon"
    onClick={() => setModal((i) => !i)}
    style={{
      cursor: 'pointer',
      width: '15vw',  // Make this consistent across both
      height: '175px', // Maintain aspect ratio
      maxWidth: '175px',  // Set a fixed max width for consistency
    }}
    whileHover={{ scale: 1.1 }}  // Optionally add hover animation
  />
</Grid>


      {/* Mountains */}
      <Grid
        component={motion.div}
        container
        layout="responsive"
        animate={controls}  // Apply the blur to the mountains container as well
        style={{
          position: 'fixed',
          bottom: '-15%',
          right: '2%',
          padding: '1px',
        }}
      >
        {/* <img
          src="/assets/Mountains.png"
          alt="Left Mountains"
          layout="responsive"
          style={{
            position: 'absolute',
            bottom: '-5%',  // Pushes the mountains down further
            left: '0',
            width: '35%',
            height: 'auto',
            zIndex: '-1',
            objectFit: 'cover',
          }}
        /> */}
      </Grid>

      {/* Modal */}
      <HomeModal isVisible={modal} close={() => setModal(false)} />
    </>
  );
};

export default Home;
