import React from "react";
import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import "./App.css"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {UserContext} from "./context/UserContext"
//firebase 

import firebase from "firebase/app";
import "firebase/auth"

//components
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PagenotFound from "./pages/Home"
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseConfig from "./config/firebaseConfig"
//init firebase 
firebase.initializeApp(firebaseConfig)

const App = () =>{
    const [user, setUser] = useState(null);
  return(
<Router>
    <ToastContainer />
  
    <UserContext.Provider value = {{user,setUser}}>
    <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
   
        </Switch>
        <Footer />
    </UserContext.Provider>
</Router>
  )
}
export default App