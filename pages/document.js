import { Html, Head, Main, NextScript } from 'next/document'
import art_details from '../data/art_details'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet" />
        <link rel="preload" href="/art_bg.png" as="image" type="image/png" />
        <link rel="preload" href="/art-gallery.png" as="image" type="image/png" />
        <link rel="preload" href="/artist_bg.png" as="image" type="image/png" />
        <link rel="preload" href="/landing_bg.png" as="image" type="image/png" />
        <link rel="preload" href="/painter.png" as="image" type="image/png" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        { art_details.map((art) => (
          <link key={art.id} rel="preload" href={`/art/${art.id}.jpg`} as="image" type="image/jpeg" />
        )) }
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}