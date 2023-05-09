import { useEffect } from 'react'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import { useActivePath } from 'src/contexts/activeLink'

const Experience = () => {
  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('Experience')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div style={{marginTop: '5%'}}>Experience</div>
    </>
  )
}

export default Experience
