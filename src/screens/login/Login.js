import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "../../common/header/Header";

import './Login.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Home from "../../screens/home/Home";



class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            credentialsIncorrect: "dispNone",
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }

    }
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });


    }
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }
  

    loginClickHandler = () => {
  
        
        let mockUser="abc";
        let mockPassword="abc";
        let mockAccesstoken="IGQVJWT0M1bkFHbnNLeU5wbUlrQnRWS3djNUN2TUxrVUxhaHBxMWVQbEtreUxENlRCX2FRR0NJUjFjXzNLVXYxSzVNNzQ5Y1lFU2k0LVpvSVo2U2hucFhwdUdteWhNaTl1TE1LQl85RmxfR3kwTGluY3p1MlRvXzEyeFZAv";

        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });

        if (this.state.username === "" || this.state.password === "") { return }

        if (this.state.username === mockUser && this.state.password ===mockPassword) {  //removed the checking password thing
            this.setState({ credentialsIncorrect: "dispNone", loggedIn: true })

            sessionStorage.setItem("access-token", mockAccesstoken);
            sessionStorage.setItem("loggedIn", true);
            this.props.history.push("/home");
            console.log("sucess login");
            // ReactDOM.render(<Home/>,document.getElementById("root"));
        }
        else {
            console.log("not correct");
            this.setState({ credentialsIncorrect: "dispBlock" })
        }

    }
  
    render() {
       
        return (

            <div>
                <div>
                    <Header />
                </div>
                    <div className="card-style">
                        <Card className="card">
                            
                            <CardContent className="card-content">
                                <Typography variant="h5" component="h2">
                                    LOGIN
                                </Typography>

                                <FormControl required>
                                    <InputLabel htmlFor="username">Username</InputLabel>
                                    <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                    <FormHelperText className={this.state.usernameRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl required>
                                    <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                    <Input id="loginPassword" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                    <FormHelperText className={this.state.passwordRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                
                                <FormHelperText className={this.state.credentialsIncorrect}>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormHelperText>
                                <br /><br />
                                <br /><br />
                                <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>

                            </CardContent>
                        </Card>

                    </div>
                </div>)
    }
}

export default Login;