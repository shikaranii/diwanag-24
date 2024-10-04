import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import art_deets from '../data/art_deets';
import NavModal from '../components/NavModal';
import localFont from 'next/font/local';

const HummerMiller = localFont({ src: '../public/fonts/Hummer Miller Demo.otf' });
const ArchisDaughter = localFont({ src: '../public/fonts/ArchitectsDaughter.ttf' });

const ViewAll = ({ currentIndex }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const forward = () => {
    if (currentIndex === art_deets.length - 1) {
      router.push(`/${art_deets[0].id}`);
    } else {
      router.push(`/${art_deets[currentIndex + 1].id}`);
    }
  };

  const back = () => {
    if (currentIndex === 0) {
      router.push(`/${art_deets[art_deets.length - 1].id}`);
    } else {
      router.push(`/${art_deets[currentIndex - 1].id}`);
    }
  };

  const home = () => {
    router.push('/');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (currentIndex < 0 || currentIndex >= art_deets.length) {
    return <div>No art found.</div>;
  }

  return (
    <>
      {/* Background div, kept fixed and behind other content */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/assets/Main_BG.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />

      {/* Main content with motion and separate styling */}
      <motion.div
        animate={{ filter: isModalOpen ? 'blur(8px)' : 'blur(0px)' }} // Blur when modal state
        transition={{ duration: 0.1 }}
        style={{ zIndex: 1 }}
      >
        {/* Main content grid */}
        <Grid container sx={{ minHeight: '100vh', overflow: 'hidden', p: 0, m: 0 }} alignItems="center" justifyContent="center">
          <Grid
            item
            xs
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            spacing={2}
          >
            <Grid item container justifyContent="center">
              {/* Motion applied to the artwork image */}
              <motion.img
                src={`/art/${art_deets[currentIndex].id}.png`}
                alt={art_deets[currentIndex].title}
                style={{
                  maxHeight: '60vh',
                  maxWidth: '90vw',
                  margin: '0 auto',
                }}
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} 
              />
            </Grid>
            <Grid item>
              {/* Card containing artwork details with consistent size */}
              <Card sx={{ 
                  width: '900px', 
                  height: '200px', 
                  overflow: 'auto', 
                  backgroundImage: 'url("/assets/Notebook BG.png")',
                  backgroundSize: 'cover',
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)', 
                  backgroundPosition: 'center',
                  borderRadius: '8px', 
                  color: 'rgba(80, 27, 11, 1)', 
                }}>
                <CardContent sx={{ px: 4 }}>
                  <Grid container justifyContent="center" alignItems="center" direction="column">
                    <Grid item>
                      <Typography className={HummerMiller.className} sx={{ fontSize: '2.4rem', fontWeight: 'bold', textAlign: 'center' }}>
                        {art_deets[currentIndex].title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={ArchisDaughter.className} sx={{ textAlign: 'center' }} >
                        {art_deets[currentIndex].medium}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={ArchisDaughter.className} sx={{ fontSize: '1rem', fontStyle: 'italic', textAlign: 'center' }}>
                        by {art_deets[currentIndex].artist}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={ArchisDaughter.className} sx={{ fontSize: '1rem', fontStyle: 'normal', textAlign: 'center' }}>
                        {art_deets[currentIndex].description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" justifyContent="center" spacing={2}>
                {/* Forward Button */}
                <Grid item>
                  <motion.img 
                    src="/assets/Arrow_button.svg"
                    onClick={forward}
                    style={{
                      cursor: 'pointer',
                      width: '15vw',  
                      height: 'auto', 
                      maxWidth: '75px',  
                    }}
                    whileHover={{ scale: 1.1 }}
                 />
                </Grid>   
                {/* Back Button */}
                <Grid item>
                  <motion.img 
                    src="/assets/BackArrow.svg"
                    onClick={back}
                    style={{
                      cursor: 'pointer',
                      width: '15vw',  
                      height: 'auto', 
                      maxWidth: '75px',  
                    }}
                    whileHover={{ scale: 1.1 }}
                 />
                </Grid>
                   {/* Home Button */}
                <Grid item>
                  <motion.img 
                    src="/assets/HomeButton.svg"
                    onClick={home}
                    style={{
                      cursor: 'pointer',
                      width: '15vw',  
                      height: 'auto', 
                      maxWidth: '75px',  
                    }}
                    whileHover={{ scale: 1.1 }}
                 />
                </Grid>
                {/* Modal Button */}
                <Grid item>
                  <motion.img 
                    src="/assets/BurgerButton.svg"
                    onClick={openModal}
                    style={{
                      cursor: 'pointer',
                      width: '15vw',  
                      height: 'auto', 
                      maxWidth: '75px',  
                    }}
                    whileHover={{ scale: 1.1 }}
                 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>

      {/* Modal component */}
      <NavModal isVisible={isModalOpen} close={closeModal} artworks={art_deets} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const currentIndex = art_deets.findIndex((art) => art.id === id);

  if (currentIndex === -1) {
    return {
      notFound: true,
    };
  }

  return { props: { currentIndex } };
}

export default ViewAll;
