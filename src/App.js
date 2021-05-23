import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Ussd from './components/Ussd';
import Phonereg from './components/Phonereg';
import Otp from './components/Otp';
import Completetrans from './components/Completetrans';
import Nolink from './components/Nolink';
import Bankpayment from './components/Bankpayment';
import Success from './components/Success';
import Error from './components/Error';

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
          <Route exact path="/" component={Phonereg} />
            <Route exact path="/phonereg" component={Phonereg} />
            <Route exact path="/ussd" component={Ussd}/>
            <Route exact path="/nolink" component={Nolink}/>
            <Route exact path="/otp" component={Otp}/>
            <Route exact path="/completetrans" component={Completetrans}/>
            <Route exact path="/success" component={Success}/>
            <Route exact path="/error" component={Error}/>
            <Route exact path="/bankpayment" component={Bankpayment}/>
          </Switch>
           
      </Router>
    </ThemeProvider>
      
    </Fragment> 
        
    
   
  );
}

export default App;
