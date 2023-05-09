import { useEffect } from 'react'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import { useActivePath } from 'src/contexts/activeLink'

const Blogs = () => {
  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('Blog')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <Header />
      <Navbar />

      <div style={{marginTop: '5%'}}>Blogs</div>
    </>
  )
}

export default Blogs
