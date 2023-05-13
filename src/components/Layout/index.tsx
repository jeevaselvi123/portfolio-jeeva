import Footer from '../Footer'
import Header from '../Header'
import { ChildNodePropType } from 'src/lib/interfaces'
import Navbar from '../Navbar'
import { useActivePath } from 'src/contexts/activeLink'

export default function Layout({ children }: ChildNodePropType) {
  const { activePath } = useActivePath()

  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
      {activePath !== 'Home' && <Footer />}
    </div>
  )
}
