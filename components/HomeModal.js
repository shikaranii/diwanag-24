import React from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import Button from './Buttons';
import art_deets from '../data/art_deets';

const HomeModal = ({ isVisible, close }) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100vw', opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            zIndex: 9999,
            top: 0,
            left: 0
          }}
        >
          <div style={{
            background: 'linear-gradient(45deg, #F38070, #FEFEFE)',
            opacity: 0.5,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            position: 'fixed'
          }} />
          <Grid container justifyContent="center" alignItems="center" height="100%" direction="column" spacing={12}>
            <Grid item>
              <img src="/art-gallery.png" alt="Gallery" />
            </Grid>
            <Grid item container justifyContent="center" spacing={16}>
              <Grid item>
                <Button
                  onClick={() => { router.push(`/${art_deets[0].id}`) }}
                >
                  Art Works
                </Button>
              </Grid>
          
              <Grid item>
                <Button
                  onClick={() => { close() }}
                >
                  Back
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HomeModal;
