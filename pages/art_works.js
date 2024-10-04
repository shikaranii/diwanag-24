import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'; // Import framer-motion for animation
import art_deets from '../data/art_deets';
import NavModal from '../components/NavModal';

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
      <motion.div
        animate={{ filter: isModalOpen ? 'blur(8px)' : 'blur(0px)' }} // Toggle blur based on modal state
        transition={{ duration: 0.1 }} // Smooth transition for the blur
      >
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
              <img
                src={`/art/${art_deets[currentIndex].id}.png`}
                alt={art_deets[currentIndex].title}
                style={{
                  maxHeight: '60vh',
                  maxWidth: '90vw',
                  margin: '0 auto',
                }}
              />
            </Grid>
            <Grid item>
              <Card>
                <CardContent sx={{ px: 8 }}>
                  <Grid container justifyContent="center" alignItems="center" direction="column">
                    <Grid item>
                      <Typography sx={{ fontFamily: 'ArchitectsDaughter', fontSize: '1.4rem', fontWeight: 'bold' }}>
                        {art_deets[currentIndex].title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontFamily: 'Montserrat' }}>
                        {art_deets[currentIndex].medium}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontStyle: 'italic' }}>
                        by {art_deets[currentIndex].artist}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontFamily: 'Montserrat', mt: 1 }}>
                        {art_deets[currentIndex].description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" justifyContent="center" spacing={2}>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={forward}>
                    Next
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" onClick={back}>
                    Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={home}>
                    Home
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={openModal}>
                    View All Artworks
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>

      {/* Pass the modal state control to NavModal */}
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
