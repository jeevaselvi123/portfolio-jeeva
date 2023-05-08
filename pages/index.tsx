import { useEffect, useRef } from 'react'
import { Typography, CardMedia } from '@mui/material'
import Typed from 'typed.js'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'

export default function Home() {
  const ref = useRef(null)

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ['Full Stack Web Developer', 'Python Developer', 'Software Developer'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <Header />
      <Navbar />
      <CardMedia
        sx={{ userSelect: 'none', height: '100vh', opacity: '0.6' }}
        component="img"
        image={'/bala.jpg'}
        alt="Developer Img"
      />
      <div style={{ position: 'absolute', color: 'white', top: '60%', left: '50%', transform: 'translateX(-50%)' }}>
        <Typography fontSize="5rem" align="center" gutterBottom>
          I am Bala
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '2rem' }} ref={ref}></span>
        </div>
      </div>
    </>
  )
}
