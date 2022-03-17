import React from 'react';
import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import { flexbox } from '@material-ui/system';
// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset} from '../../services/auth/authSlice';
import { useNavigate } from 'react-router-dom';


//const pages = ['Explore Investments', 'Get Funding', 'Blog'];


import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';

const Navbar = ({toggle}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);
  // const {user, setUser} = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }

  const renderMenu = () => {
    if (user) {
      return (
      
        <NavMenu>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button onClick={onLogout}>Logout</button>
          
        </NavMenu>
      );
    }else {
      return (
        <><NavMenu>
          <NavLink to="/explore">Explore Investments</NavLink>
          <NavLink to="/signUpContractor">Get Funding</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/signInCoach">Join Team</NavLink>
          <NavLink to="/event">Explore Event</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </NavMenu><NavBtn>
            <NavBtnLink to="/signInContractor">Sign In</NavBtnLink>
          </NavBtn></>
      );
    }
  }
  
  return (
    <>
        <Nav>
            <NavLink to="/">
            <img src={logo} alt="Logo" idth={182} height={64} />
            </NavLink>
            
              <Bars onClick={toggle} />
              {renderMenu()}
            
        </Nav>
    </>
  );
};

// const Navbar = () => {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
    
//     const handleOpenNavMenu = (event) => {
//       setAnchorElNav(event.currentTarget);
//     };
    
//     const handleCloseNavMenu = () => {
//       setAnchorElNav(null);
//     };
  
    
//     return (
//       <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Typography variant='title'>
//                 <Link to="/">
//                     <img src={logo} alt="Logo" idth={182} height={64} />
//                 </Link>
//             </Typography>
  
//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none' },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//             >
//               <img src={logo} alt="Logo" idth={182} height={64} />
//             </Typography>
//             <Box sx={{ alignSelf: 'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: 'white', display: 'block' }}
//                 >
//                     <Link to='/explore'>{page}</Link>
                  
//                 </Button>
//               ))}
//             </Box>
  
            
//           </Toolbar>
//         </Container>
//       </AppBar>
//     );
//}
export default Navbar