import { useEffect } from 'react'
import Cards from 'src/components/Cards'
import { useActivePath } from 'src/contexts/activeLink'

const Blogs = () => {
  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('Blog')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div style={{ marginTop: '70px' }}>
    <Cards />
  </div>
}

export default Blogs
