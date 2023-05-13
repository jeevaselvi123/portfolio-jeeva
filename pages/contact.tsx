import { Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useActivePath } from 'src/contexts/activeLink'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { InfoType, SocialMediaType } from 'src/lib/interfaces'
import { useInfoGetById } from 'src/lib/apiHelpers'
import Skeletons from 'src/components/Skeleton'
import SocialMediaIcon from 'src/components/SocialMediaIcon'

const Contact = () => {
  const { setActivePath } = useActivePath()

  const [info, setInfo] = useState<InfoType | null>(null)

  const { data: infoData, isLoading: isInfoLoading } = useInfoGetById(`${process.env.PORTFOLIO_INFO_ID}` || '')

  useEffect(() => {
    setActivePath('Contact')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isInfoLoading) {
      const res = infoData as InfoType
      setInfo(res)
    }
  }, [isInfoLoading, infoData])

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
              <Grid item container direction="column">
                <Typography gutterBottom variant="h4">
                  Send Message
                </Typography>
              </Grid>
              <Grid container item direction="column" alignItems="center">
                <TextField label="Your Name" variant="outlined" sx={{ marginY: 1 }} fullWidth />

                <TextField label="Your Email" variant="outlined" sx={{ marginY: 1 }} fullWidth />

                <TextField label="Subject" variant="outlined" sx={{ marginY: 1 }} fullWidth />

                <TextField label="Message" multiline rows={5} sx={{ marginY: 1 }} fullWidth />

                <Button variant="contained" sx={{ padding: 1.5, width: '50%', marginTop: 4, borderRadius: '50px' }}>
                  Send Message
                </Button>
              </Grid>
            </Grid>

            <Grid container item sm margin={2} direction="column">
              <Typography gutterBottom variant="h4">
                Get in Touch
              </Typography>

              {isInfoLoading ? (
                <Skeletons type="contDesc" />
              ) : (
                <Typography variant="h6" color="gray" lineHeight={1.5} sx={{ marginBottom: 4 }}>
                  {info?.contactDesc}
                </Typography>
              )}

              <Typography gutterBottom variant="body1" sx={{ marginY: 1 }} display="flex" alignItems="center">
                <LocationOnOutlinedIcon sx={{ marginRight: 1.5 }} />
                {isInfoLoading ? <Skeletons type="text" /> : info?.address}
              </Typography>

              <Typography gutterBottom variant="body1" sx={{ marginY: 1 }} display="flex" alignItems="center">
                <PhoneAndroidOutlinedIcon sx={{ marginRight: 1.5 }} />
                {isInfoLoading ? <Skeletons type="text" /> : info?.phoneNo}
              </Typography>

              <Typography gutterBottom variant="body1" sx={{ marginY: 1 }} display="flex" alignItems="center">
                <EmailOutlinedIcon sx={{ marginRight: 1.5 }} />
                {isInfoLoading ? <Skeletons type="text" /> : info?.email}
              </Typography>

              <Grid item container sx={{ marginTop: 1, justifyContent: { xs: 'center', md: 'left' } }} direction="row">
                {isInfoLoading
                  ? [1, 2, 3, 4].map((ind: number) => {
                      return <Skeletons key={ind} type="iconSmall" />
                    })
                  : info?.socialMedias.map((val: SocialMediaType, ind: number) => {
                      return (
                        <a key={ind} target="_blank" href={val.url} rel="noopener noreferrer">
                          <IconButton>{SocialMediaIcon(val.name)}</IconButton>
                        </a>
                      )
                    })}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  )
}

export default Contact
