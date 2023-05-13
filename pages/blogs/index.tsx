import { Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import Cards from 'src/components/Cards'
import Skeletons from 'src/components/Skeleton'
import { useActivePath } from 'src/contexts/activeLink'
import { useBlogsGetByInfoId } from 'src/lib/apiHelpers'
import { BlogType } from 'src/lib/interfaces'

const Blogs = () => {
  const { setActivePath } = useActivePath()

  const [blogs, setBlogs] = useState<BlogType[] | null>(null)

  const { data: blogsData, isLoading: isBlogsLoading } = useBlogsGetByInfoId(`${process.env.PORTFOLIO_INFO_ID}` || '')

  useEffect(() => {
    setActivePath('Blog')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isBlogsLoading) {
      const res = blogsData as BlogType[]
      setBlogs(res)
    }
  }, [isBlogsLoading, blogsData])

  return (
    <Box sx={{ marginTop: '70px', height: '100%', pt: { sm: 4, xs: 0 }, pb: { sm: 4, xs: 2 } }}>
      <Grid container direction="row" justifyContent="center" spacing={4}>
        {isBlogsLoading ? (
          <Skeletons type="blogCard" />
        ) : (
          blogs?.map((blog: BlogType, index: number) => {
            return <Cards key={index} blogData={blog} />
          })
        )}
      </Grid>
    </Box>
  )
}

export default Blogs
