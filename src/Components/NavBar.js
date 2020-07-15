import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



function NavBar() {
  return (
    <div>
        
   <AppBar position="static">
        <Toolbar>
    <Typography>
    
      <Link to="/" className="NavLinks" color="inherit" >Home</Link>
      <Link to="/about" className="NavLinks" color="inherit" >About</Link>
      <Link to="/products" className="NavLinks" color="inherit" >Products</Link>
      <Link to="/contacts" className="NavLinks" color="inherit" >Contacts</Link>
    
    </Typography>
    </Toolbar>
     </AppBar>
     
    </div>
  );
}
   

export default NavBar;
