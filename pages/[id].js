/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import art_deets from '../data/art_deets';

const ViewAll = ({ currentIndex }) => {
  const router = useRouter();
  const { id } = router.query;

  const forward = () => {
    if (currentIndex === art_deets.length - 1) {
      router.push(`/${art_deets[0].id}`);
    } else {
      router.push(`/${art_deets[currentIndex + 1].id}`);
    }
  };

  if (currentIndex < 0 || currentIndex >= art_deets.length) {
    return <div>No art found.</div>;
  }

  return (
    <>
      <Grid
        key={id}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={2}
        style={{ height: '100vh', width: '100vw' }}
      >
        <Grid item>
          <img
            src={`/art/${art_deets[currentIndex].id}.jpg`}
            alt={art_deets[currentIndex].title}
            style={{
              border: '5px solid #fff',
              maxHeight: '60vh',
              maxWidth: '90vw',
            }}
          />
        </Grid>
        <Grid item>
          <Card style={{ borderRadius: 20 }}>
            <CardContent style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
              <Grid container justifyContent="center" alignItems="center" direction="column">
                <Grid item>
                  <Typography style={{ fontFamily: 'Montserrat', fontSize: '1.4rem', fontWeight: 'bold' }}>
                    {art_deets[currentIndex].title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontFamily: 'Montserrat' }}>
                    {art_deets[currentIndex].medium}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontStyle: 'italic' }}>
                    by {art_deets[currentIndex].artist}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontFamily: 'Montserrat', marginTop: '1rem' }}>
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
              <IconButton aria-label="forward" size="large" onClick={forward}>
                Next
              </IconButton>
            </Grid>
            <Grid item>
                <IconButton
                  onClick={() => { close() }}
                >
                  Back
                </IconButton>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
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

  // Pass data to the page via props
  return { props: { currentIndex } };
}

export default ViewAll;
