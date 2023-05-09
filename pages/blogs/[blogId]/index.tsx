import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import { useActivePath } from 'src/contexts/activeLink'

const Blog = () => {
  const router = useRouter()

  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('Blogs')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div style={{ marginTop: '5%' }}>Blog: {router.query.blogId}</div>
    </>
  )
}

export default Blog
