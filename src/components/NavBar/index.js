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
import { logout, logoutInvestor , reset} from '../../services/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import {useApi} from '../../hooks/useApi'
import {queryApi} from '../../utils/queryApi'


//const pages = ['Explore Investments', 'Get Funding', 'Blog'];


import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';



function Navbar  ({toggle})  {
  const { investor } = useSelector((state) => state.auth);
  if (investor){
   var  id= investor._id
  }else {
    var id = ""
  }

  const [toRender,err,reload] = useApi('investors/investorId/'+id);
  const [formData, setFormData] = useState({
    username:"",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber:"", 
      sexe: "",
      datOfBirth : "",
      adress: "",
      status:"", 
      accreditationForm:"",
      centerOfInterest :"" ,
      accountType :""
  });
  async function fetchData() {
    const [res, err] = await queryApi("investors/investorId/" + investor._id);
    setFormData({
      username: toRender.username,
      firstName: toRender.firstName,
      lastName: toRender.lastName ,
      email: toRender.email,
      password: toRender.password,
      phoneNumber: toRender.phoneNumber, 
      sexe: toRender.sexe,
      datOfBirth : toRender.datOfBirth ,
      adress: toRender.adress,
      status: toRender.status, 
      accreditationForm: toRender.accreditationForm,
      centerOfInterest : toRender.centerOfInterest,
      accountType : toRender.accountType
    });
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {entrepreneur} = useSelector((state) => state.auth);

  

  // const {user, setUser} = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }
  const onLogoutInvestor = () => {
    dispatch(logoutInvestor());
    dispatch(reset());
    navigate('/');
  }
//console.log(investor)

  const renderMenu = () => {
    if (entrepreneur) {
      return (
      
        <NavMenu>

          <NavLink to="/dashboard">
          <div>
            <div className='dashbordNav' >

            Dashboard  

            </div>
            </div>
          </NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/managemyprojects">Manage My Projects</NavLink>

          <NavLink to="/chat">Messages</NavLink>
          {/* <NavLink to="/AllProjectInvestor">Projects</NavLink> */}
          <NavLink to="/offerlist">Coachs</NavLink>
          <NavLink to="/events">Events</NavLink>
          <button className='button' onClick={onLogout}>Logout</button>
          
        </NavMenu>
      );
      

      
    } else if (investor) {

       if(toRender){
        console.log(toRender)
      return (
      
        <NavMenu>
          <NavLink to="/dashboardInvestor">
            <div>
            <div className='dashbordNav' >
            <img
            src={`${process.env.REACT_APP_API_URL_UPLOADS + '/' + toRender.image}`}                      alt=""
              className="userShowImg"
            />
            Dashboard  {investor.name}

            </div>
            </div></NavLink>
          <NavLink to="/profileInvestor">Profile</NavLink>
          <NavLink to="/AllProjectInvestor">Projects</NavLink>
          <NavLink to="/offerlist">Coachs</NavLink>
          <NavLink to="/events">Events</NavLink>


          <button className='button' onClick={onLogoutInvestor}>Logout</button>
          
        </NavMenu>
      );}}
      

      
    //}
    else {
      return (
        <><NavMenu>
          <NavLink to="/AllProjectInvestor">Explore Investments</NavLink>
          <NavLink to="/signUpContractor">Get Funding</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/offerlist">Our Coachs</NavLink>
          <NavLink to="/events">Explore Event</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </NavMenu><NavBtn>
          <NavBtnLink to="/RegestrationInvestor">Start Investing</NavBtnLink>
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