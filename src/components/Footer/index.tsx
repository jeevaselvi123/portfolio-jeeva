import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <Typography color="#fff" variant="body1" textAlign="center" marginTop={2} marginBottom={2}>
      Copyright &copy; {new Date().getFullYear()} | Made with&nbsp;
      <FavoriteOutlinedIcon sx={{ width: '16px', height: '16px', fill: '#f43f5e' }} />
      &nbsp; Made by Bala
    </Typography>
  )
}

export default Footer
