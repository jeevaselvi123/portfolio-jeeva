import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Skeletons from 'src/components/Skeletons'
import { useActivePath } from 'src/contexts/activeLink'
import { useBlogGetById } from 'src/lib/apiHelpers'
import { BlogType } from 'src/lib/interfaces'

const Blog = () => {
  const router = useRouter()
  const { setActivePath } = useActivePath()

  const [blog, setBlog] = useState<BlogType | null>(null)
  const { data: blogData, isLoading: isBlogLoading } = useBlogGetById(`${router.query.blogId}` || '')

  useEffect(() => {
    setActivePath('Blogs')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isBlogLoading) {
      const res = blogData as BlogType
      setBlog(res)
    }
  }, [isBlogLoading, blogData])

  return (
    <>
      <div style={{ marginTop: '5%' }}>
        {isBlogLoading ? (
          <Skeletons type="blogContent" />
        ) : (
          blog && (
            <Box
              sx={{
                p: { sm: 2.5, xs: 2 },
                marginX: { sm: '50px', xs: '15px' },
              }}
            >
              <Typography variant="h3" color="#fff">
                {blog.heading}
              </Typography>
              <Typography
                sx={{ pt: { sm: 2.5, xs: 2 } }}
                color="#fff"
                component="div"
                dangerouslySetInnerHTML={{ __html: blog.content }}
                gutterBottom
              ></Typography>
            </Box>
          )
        )}
      </div>
    </>
  )
}

export default Blog
