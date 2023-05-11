import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Divider,
  Avatar,
  Grid,
  Link,
  CardActionArea,
} from '@mui/material'
import { useRouter } from 'next/router'

const Cards = () => {
  const router = useRouter()

  const handleBlogPageRoute = () => {
    router.push('/blogs/1')
  }

  return (
    <Grid item>
      <Card sx={{ maxWidth: 325 }}>
        <CardActionArea onClick={handleBlogPageRoute} disableRipple>
          <CardMedia
            component="img"
            height="200"
            image="/bala.jpg"
            alt="Blog Writter"
            style={{ userSelect: 'none', pointerEvents: 'none' }}
          />
        </CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link
              onClick={handleBlogPageRoute}
              underline="none"
              sx={{
                userSelect: 'none',
                cursor: 'pointer',
                color: 'black',
                transition: 'all 0.5s ease-in-out',
                '&:hover': {
                  color: '#0d6efd',
                },
              }}
            >
              Blog Page name
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>
        <Divider />
        <CardHeader
          avatar={<Avatar alt="Blog Writer" src="/bala.jpg" sx={{ userSelect: 'none', pointerEvents: 'none' }} />}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      </Card>
    </Grid>
  )
}

export default Cards
