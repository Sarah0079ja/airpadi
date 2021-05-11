import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Ussd from './components/Ussd';
import Phonereg from './components/Phonereg';
import Otp from './components/Otp';
import Nolink from './components/Nolink';
import { createMuiTheme, ThemeProvider} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

import './App.css';

const App = () => {

  const theme = createMuiTheme({
    typography:{
      display: "block",
      fontFamily: 'Avenir',
      text: {
        primary: "#152955",
        
      }
    }
  })

  return (
    <Fragment>
    
    <ThemeProvider theme={theme}>
    <Router>
           <Navbar />
           
          
          <Switch>
            <Route exact path="/phonereg" component={Phonereg} />
            <Route exact path="/ussd" component={Ussd}/>
            <Route exact path="/nolink" component={Nolink}/>
            <Route exact path="/otp" component={Otp}/>
          </Switch>
           
      </Router>
    </ThemeProvider>
      
    </Fragment> 
        
    
   
  );
}

export default App;
