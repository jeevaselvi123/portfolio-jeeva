import { useEffect, useRef, useState } from 'react'
import { Typography, CardMedia } from '@mui/material'
import Typed from 'typed.js'
import { useActivePath } from 'src/contexts/activeLink'
import { useInfoGetById } from 'src/lib/apiHelpers'
import { InfoType } from 'src/lib/interfaces'
import Skeletons from 'src/components/Skeletons'

const Home = () => {
  const ref = useRef(null)
  const { setActivePath } = useActivePath()

  const [info, setInfo] = useState<InfoType | null>(null)

  const { data: infoData, isLoading: isInfoLoading } = useInfoGetById(`${process.env.PORTFOLIO_INFO_ID}` || '')

  useEffect(() => {
    setActivePath('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isInfoLoading) {
      const res = infoData as InfoType
      setInfo(res)
      const typed = new Typed(ref.current, {
        strings: res.profileNames,
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [isInfoLoading, infoData])

  return (
    <>
      <CardMedia
        sx={{ userSelect: 'none', height: '100vh', opacity: '0.6', pointerEvents: 'none' }}
        component="img"
        image="/bala.jpg"
        alt="Developer Img"
      />
      <div style={{ position: 'absolute', color: 'white', top: '60%', left: '50%', transform: 'translateX(-50%)' }}>
        {isInfoLoading ? (
          <Skeletons type="textLarge" />
        ) : (
          <>
            <Typography
              variant="h1"
              align="center"
              gutterBottom
              sx={{ userSelect: 'none', fontSize: { sm: '4rem', xs: '2rem' } }}
            >
              Hi... I am {info?.aliasName}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              sx={{ userSelect: 'none', fontSize: { sm: '1.5rem', xs: '1rem' } }}
            >
              I am a <span ref={ref}></span>
            </Typography>
          </>
        )}
      </div>
    </>
  )
}

export default Home
