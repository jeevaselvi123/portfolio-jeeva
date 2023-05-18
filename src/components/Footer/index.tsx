import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <Typography color="#fff" textAlign="center" margin={1}>
      Copyright &copy; {new Date().getFullYear()} | Made with&nbsp;
      <FavoriteOutlinedIcon sx={{ width: '16px', height: '16px', fill: '#f43f5e' }} />
      &nbsp;by Jeeva
    </Typography>
  )
}

export default Footer
