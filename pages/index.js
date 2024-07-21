import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '../components/Buttons';
import { useAnimation, motion } from 'framer-motion';
import HomeModal from '../components/HomeModal';

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setBgIndex(modal ? 2 : 0);
    controls.start({
      filter: modal ? 'blur(50px)' : 'blur(0px)',
    });
  }, [modal, controls]);

  return (
    <>
      <Grid
        component={motion.div}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
        animate={controls}
        style={{ height: '100vh', width: '100vw' }}
      >
        <Grid item>
          <Typography
            style={{
              fontFamily: 'Grahamo',
              fontSize: 'clamp(4rem, 5vw, 10rem)', // Adjusted size
              color: '#430F0F',
              lineHeight: 'clamp(3.5rem, 4vw, 9rem)', // Adjusted size
              filter: 'drop-shadow(0 -2px 1rem #DC7676)',
            }}
          >
            Down the Rabbit Hole
          </Typography>
          <Typography style={{ fontFamily: 'Montserrat', fontSize: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}>
            DIWANAG 2024
          </Typography>
        </Grid>
        <Grid item>
          <img src="/logooo.png" alt="Down The Rabbit Hole Logo" />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" style={{ position: 'absolute', bottom: '10%', right: '10%' }}>
        <Button onClick={() => setModal((i) => !i)}>Art Gallery</Button>
      </Grid>
      <HomeModal setBgIndex={0} isVisible={modal} close={() => setModal(false)} />
    </>
  );
};

export default Home;
