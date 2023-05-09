import { useEffect } from 'react'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import { useActivePath } from 'src/contexts/activeLink'

const Contact = () => {
  const { setActivePath } = useActivePath()

  useEffect(() => {
    setActivePath('Contact')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div style={{marginTop: '5%'}}>Contact</div>
    </>
  )
}

export default Contact
