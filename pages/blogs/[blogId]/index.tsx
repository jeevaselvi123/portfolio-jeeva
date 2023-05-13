import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Cards from 'src/components/Cards'
import { useActivePath } from 'src/contexts/activeLink'
import { useBlogGetById } from 'src/lib/apiHelpers'
import { BlogType } from 'src/lib/interfaces'

const Blog = () => {
  const router = useRouter()

  const [blog, setBlog] = useState<BlogType | null>(null)

  const { data: blogData, isLoading: isBlogLoading } = useBlogGetById(`${router.query.blogId}` || '')

  const { setActivePath } = useActivePath()

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
        Blog: {router.query.blogId}
        {!isBlogLoading && blog != null ? <Cards blogData={blog} /> : <></>}
      </div>
    </>
  )
}

export default Blog
