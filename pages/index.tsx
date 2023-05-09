import { useEffect, useRef } from 'react'
import { Typography, CardMedia } from '@mui/material'
import Typed from 'typed.js'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'
import { useActivePath } from 'src/contexts/activeLink'

const Home = () => {
  const ref = useRef(null)
  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ['Full Stack Web Developer', 'Python Developer', 'Software Developer'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
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
        sx={{ userSelect: 'none', height: '100vh', opacity: '0.6', pointerEvents: 'none' }}
        component="img"
        image={'/bala.jpg'}
        alt="Developer Img"
      />
      <div style={{ position: 'absolute', color: 'white', top: '60%', left: '50%', transform: 'translateX(-50%)' }}>
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          sx={{ userSelect: 'none', fontSize: { sm: '4rem', xs: '2rem' } }}
        >
          Hi... I am Bala
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{ userSelect: 'none', fontSize: { sm: '1.5rem', xs: '1rem' } }}
        >
          I am a <span ref={ref}></span>
        </Typography>
      </div>
    </>
  )
}

export default Home
