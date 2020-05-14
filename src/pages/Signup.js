import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import {UserContext} from "../context/UserContext"
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify"
import {Container,Col,Row} from "reactstrap"
const Signup = () =>{

    const context = useContext(UserContext)
    const [email ,setEmail] = useState('');
    const [password,setPassword] = useState('')
    
    const handleSignUp = () =>{
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(res =>{
            console.log(res)
            context.setUser({email : res.user.email,uid : res.user.uid})
        })
        .catch(error=>{
            console.log(error)
            toast(error.message,{type:"error"})
        })
    }
  const HandleSubmit = (e) =>{
      e.preventDefault()
      handleSignUp()
  }
      if (context.user?.uid){
          return <Redirect to="/"/>
      }
      else{
    return(
        <Container >
                  <Row >
                      <Col>
                      </Col>
                      <Col >
                           <div className = "loginForm">
                                  <span><h2 style={{textAlign:"center"}}>SIGNUP-Make Me Garden</h2></span>
                               <form  autoComplete="false" onSubmit={HandleSubmit}>
                                   <input type = "email" name = "name" placeholder= "Email" required  id="uname" value={email} onChange={e =>setEmail(e.target.value)}/>
                                   <input type = "password" id = "pword" placeholder = "password" required value={password} onChange={e =>setPassword(e.target.value)}/>
                                   <input type = "submit" value = "Sign Up" id= "button"/>
                               </form>
                           </div>
                      </Col>
                      <Col>
                      </Col>
                  </Row>
              </Container>
    )
      }
}

export default Signup