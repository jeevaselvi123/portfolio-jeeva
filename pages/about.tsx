import { useEffect } from 'react'
import { useActivePath } from 'src/contexts/activeLink'
import { Grid, IconButton, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const About = () => {
  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('About')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const aboutContent = `
  <div><h3> Hi ! </h3>
  <p>I'm Balasubramani Ravindran - Full stack web developer and Python developer in India</p>
  <p>Leading an exploring lifestyle is a personal goal. Always dreams big.</p>
  <p>After schooling, I have done my graduation in computer science and engineeering. At that time used to visit many colleges in different cities to get exposure and more towards exploring the other cities. Love to travel.</p>
  <p>Apart from curriculum, I play cricket and volleyball. Not a great player but like to spend some time apart from studies and enjoy the game.</p>
  <p>I gained more interest towards the computers in my pre-final year. Then I learned Web Development and played with some funny projects. </p>
  <p>After graduation, I have entered into Lightcast, worked on Web Apps using ReactJs, NextJs and, backend using Python and, Express NodeJs.</p>
  <h3>One thing I prefer to follow</h3>
  <h1><i>Chase your Dreams</i></h1></div>`

  return (
    <>
      <div style={{ marginTop: '70px' }}>
        <Paper
          sx={{
            p: { sm: 5, xs: 2 },
            marginX: { sm: '50px', xs: '15px' },
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm spacing={2} container direction="column" alignItems="center">
              <Grid item marginTop={2}>
                <Image
                  alt="Developer Img"
                  src="/bala.jpg"
                  width={250}
                  height={250}
                  priority={true}
                  style={{ userSelect: 'none', pointerEvents: 'none', borderRadius: '10px' }}
                />
              </Grid>
              <Grid item>
                <Grid item>
                  <Typography gutterBottom variant="body1">
                    <b>Name</b>: Balasubramani Ravindran
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="body1">
                    <b>Profile</b>: Full stack web developer
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="body1">
                    <b>Email</b>: baluravi2281999@gmail.com
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="body1">
                    <b>Phone</b>: 8056893584
                  </Typography>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center">
                  <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                    <IconButton>
                      <LinkedInIcon />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                  </a>

                  <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                    <IconButton>
                      <InstagramIcon />
                    </IconButton>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm container item>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    About me
                  </Typography>
                  <Typography
                    component="div"
                    gutterBottom
                    dangerouslySetInnerHTML={{ __html: aboutContent }}
                  ></Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  )
}

export default About
