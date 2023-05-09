import { Card, CardContent, CardHeader, Typography, CardMedia, Divider, Avatar } from '@mui/material'
import Image from 'next/image'

const Cards = () => {
  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardMedia component="img" height="200" image="/bala.jpg" alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography>
      </CardContent>
      <Divider />
      <CardHeader
        avatar={<Avatar alt="Blog Writer" src="/bala.jpg" />}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
  )
}

export default Cards
