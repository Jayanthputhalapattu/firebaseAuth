import React,{useState, useContext} from "react";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify"
import {Container,Col,Row} from "reactstrap"
import firebase from "firebase/app"
import { UserContext } from "../context/UserContext";
const Signup = () =>{
    const [email ,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const context = useContext(UserContext)
    const HandleLogin = () =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(res=>{
            context.setUser({email : res.user.email, uid : res.user.uid})
        })
        .catch(error=>{
            toast(error.message,{type:"error"})
        })
    }
    const HandleSubmit = (e) =>{
        e.preventDefault()
        HandleLogin()
    }

    if (context.user?.uid){
        return <Redirect to="/" />
    }
    else
    return(
        <Container >
        <Row >
            <Col>
            </Col>
            <Col >
                 <div className = "loginForm">
                        <span><h2 style={{textAlign:"center"}}>Login-Make Me Garden</h2></span>
                     <form  autoComplete="false" onSubmit={HandleSubmit}>
                         <input type = "email" name = "name" placeholder= "Email" required  id="uname" value={email} onChange={e =>setEmail(e.target.value)}/>
                         <input type = "password" id = "pword" placeholder = "password" required value={password} onChange={e =>setPassword(e.target.value)}/>
                         <input type = "submit" value = "Login" id= "button"/>
                     </form>
                 </div>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
    )
}

export default Signup