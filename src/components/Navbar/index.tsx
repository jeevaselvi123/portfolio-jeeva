import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import { NavBarProps } from '../../lib/interfaces'
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter } from 'next/router'
import { NAV_ITEMS } from 'src/lib/constants'
import { useActivePath } from 'src/contexts/activeLink'

const HideOnScroll = ({ window, children }: NavBarProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <></>}
    </Slide>
  )
}

const Navbar = (props: NavBarProps) => {
  const { window } = props

  const router = useRouter()

  const { activePath } = useActivePath()

  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = window !== undefined ? () => window().document.body : undefined

  const handlePageRouteClick = (path: string) => {
    router.push(path)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar sx={{ mx: { xs: 0, sm: 12 } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <AdbIcon
              onClick={() => handlePageRouteClick('/')}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer' }}
            />
            <Typography
              onClick={() => handlePageRouteClick('/')}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, userSelect: 'none', cursor: 'pointer' }}
            >
              Portfolio
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {NAV_ITEMS.map(({ label, path }, index) => (
                <Button
                  key={index}
                  sx={{
                    color: '#fff',
                    borderBottomColor: '#fff',
                    borderBottomWidth: '3px',
                    borderBottomStyle: activePath === label ? 'solid' : '',
                    borderRadius: '0px',
                  }}
                  onClick={() => handlePageRouteClick(path)}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Portfolio
            </Typography>
            <Divider />
            <List>
              {NAV_ITEMS.map(({ label, path }, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handlePageRouteClick(path)}>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}

export default Navbar
