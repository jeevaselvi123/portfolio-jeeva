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
import { useState } from 'react'
import { BlogCardType } from 'src/lib/interfaces'
import Skeletons from '../Skeletons'

const Cards = ({ blogData }: BlogCardType) => {
  const router = useRouter()

  const [cardImage, setCardImgSrc] = useState<string>(blogData.logo.length > 0 ? blogData.logo : '/blog.jpg')
  const [isCardImageLoaded, setIsCardImageLoaded] = useState<boolean>(false)

  const handleBlogPageRoute = () => {
    router.push(`/blogs/${blogData._id}`)
  }

  return (
    <Grid item>
      <Card sx={{ width: 325 }}>
        <CardActionArea onClick={handleBlogPageRoute} disableRipple>
          {!isCardImageLoaded && <Skeletons type="blogCardImage" />}
          <CardMedia
            component="img"
            height="200"
            image={cardImage}
            alt="Blog Writer"
            style={{ userSelect: 'none', pointerEvents: 'none', display: isCardImageLoaded ? 'block' : 'none' }}
            onLoad={() => {
              setIsCardImageLoaded(true)
            }}
            onError={() => {
              setCardImgSrc('/blog.jpg')
              setIsCardImageLoaded(true)
            }}
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
              {blogData.heading}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blogData.desc}
          </Typography>
        </CardContent>
        <Divider />
        <CardHeader
          avatar={
            <Avatar alt="Blog Writer" src={blogData.authorImg} sx={{ userSelect: 'none', pointerEvents: 'none' }} />
          }
          title={blogData.author}
          subheader={blogData.writtenOn}
        />
      </Card>
    </Grid>
  )
}

export default Cards
