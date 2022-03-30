import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const pages = [
  {
    text: 'Home',
    route: "/Home"
  },
  {
    text: 'Dashboard',
    route: '/Dashboard'
  },
];
const settings = [
  {
    text: 'Profile',
    route: '/Profile',
  },
  {
    text: 'Dashboard',
    route: '/MarketPlace'
  },
  {
    text: 'Logout',
  }
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{ boxShadow: 'none', backgroundColor: '#11131b',borderBottom:'1px solid #4462e740' }} >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            noWrap
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/'>
              <img src='./img/logo.svg' width='200' />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>

                  <Typography display='flex' alignItems='center' textAlign="center">
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to='/'>
              <img src='./img/logo.svg' width='100' />
            </Link>
          </Box>
          <Box display='flex' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.txet}
                component={Link} sx={{ my: 2 }} disableRipple scroll={(el) => {
                  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
                  const yOffset = -65;
                  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
                }} to={page.route}

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} marginRight='20px'>
            <Link to='/login' style={{ textDecoration: 'none', color: '#fff' }}>
              <Button size="medium"
                sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', }}
                onClick={(() => alert('Login your account'))}>
                Connect Wallet
              </Button>
            </Link>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
