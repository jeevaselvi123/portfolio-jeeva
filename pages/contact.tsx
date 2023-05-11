import { Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useActivePath } from 'src/contexts/activeLink'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const Contact = () => {
  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('Contact')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div style={{ marginTop: '70px' }}>
        <Paper
          sx={{
            p: { sm: 4, xs: 2 },
            marginX: { md: 15, xs: '15px' },
            marginTop: 10,
          }}
        >
          <Grid container direction="row">
            <Grid item sm xs margin={2}>
              <Grid item direction="column">
                <Typography gutterBottom variant="h4">
                  Send Message
                </Typography>
              </Grid>
              <Grid container direction="column" alignItems="center">
                <TextField label="Your Name" variant="outlined" sx={{ marginY: 1 }} fullWidth />

                <TextField label="Your Email" variant="outlined" sx={{ marginY: 1 }} fullWidth />

                <TextField label="Subject" variant="outlined" sx={{ marginY: 1 }} fullWidth />

                <TextField label="Message" multiline maxRows={5} rows={5} sx={{ marginY: 1 }} fullWidth />

                <Button variant="contained" sx={{ padding: 1.5, width: '50%', marginTop: 4, borderRadius: '50px' }}>
                  Send Message
                </Button>
              </Grid>
            </Grid>

            <Grid container item sm margin={2} direction="column">
              <Typography gutterBottom variant="h4">
                Get in Touch
              </Typography>

              <Typography variant="h6" color="gray" lineHeight={1.5} sx={{ marginBottom: 4 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita
                aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia
                inventore?
              </Typography>

              <Typography gutterBottom variant="body1" sx={{ marginY: 1 }} display="flex" alignItems="center">
                <LocationOnOutlinedIcon sx={{ marginRight: 1.5 }} /> 25, Gopal Street, Rasipuram
              </Typography>

              <Typography gutterBottom variant="body1" sx={{ marginY: 1 }} display="flex" alignItems="center">
                <PhoneAndroidOutlinedIcon sx={{ marginRight: 1.5 }} /> +91 8056893584
              </Typography>

              <Typography gutterBottom variant="body1" sx={{ marginY: 1 }} display="flex" alignItems="center">
                <EmailOutlinedIcon sx={{ marginRight: 1.5 }} /> baluravi2281999@gmail.com
              </Typography>

              <Grid item container sx={{ marginTop: 1, justifyContent: { xs: 'center', md: 'left' } }} direction="row">
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
        </Paper>
      </div>
    </>
  )
}

export default Contact
