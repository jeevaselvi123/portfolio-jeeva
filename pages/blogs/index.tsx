import { Box, Grid } from '@mui/material'
import { useEffect } from 'react'
import Cards from 'src/components/Cards'
import { useActivePath } from 'src/contexts/activeLink'

const Blogs = () => {
  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('Blog')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box sx={{ marginTop: '70px', height: '100%', pt: { sm: 4, xs: 0 }, pb: { sm: 4, xs: 2 } }}>
      <Grid container direction="row" justifyContent="center" spacing={4}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Grid>
    </Box>
  )
}

export default Blogs
