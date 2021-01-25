// import React, {Component} from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Login from './login/Login';

// import Home from './home/Home'
// import Profile from './profile/Profile';


// /** Controller Component for routing*/
// class Controller extends Component {

//   /** set the base url*/
//   constructor() {
//     super();
//     // this.baseUrl = "https://api.instagram.com/";
//   }

//   /** render based on routing mapping*/
//   render() {
//     return (
//         <Router>
//           <div className="main-container">
//             <Route exact path='/' render={(props) => <Login {...props}
//                                                             // baseUrl={this.baseUrl}
//                                                             />}
//             />
//             <Route exact path='/home' render={(props) => <Home {...props}
//                                                             //    baseUrl={this.baseUrl}
//                                                                />}/>
//             <Route exact path='/profile' render={(props) => <Profile {...props}
//                                                                     //  baseUrl={this.baseUrl}
//                                                                      />}/>
//           </div>
//         </Router>
//     )
//   }
// }

// export default Controller;

import React, { Component } from 'react';
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import Profile from './screens/profile/Profile';
import { Route, Redirect } from 'react-router'


class Controller extends Component {

  constructor() {
    super();
    // this.baseUrl = "v1/users/self/";
    this.baseUrl="https://graph.instagram.com/";
  }
  render() {
    console.log("LoggedIn value is :" +this.props.loggedIn);
    debugger;

    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
          <Route path='/home' render={(props) => (sessionStorage.getItem("access-token") !==null? <Home {...props} baseUrl={this.baseUrl} loggedIn="true" showSearchTab ="true" /> :  <Redirect to="/"/>)} />
          <Route path='/profile' render={(props) =>(sessionStorage.getItem("access-token") !==null? <Profile {...props} baseUrl={this.baseUrl} loggedIn="true" />: <Redirect to="/"/>) } />
        </div>
      </Router>
    )
  }
}

export default Controller;