import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './log.css'
import {GoogleLoginButton} from 'react-social-login-buttons' 
import {  Form, FormGroup, Label, Input}
 from 'reactstrap';
import Button from 'react-bootstrap/Button';
class Login extends Component {
	render() {
		return (
			<Form className="login-form">	
				<h2 className="text-center">Welcome Dealers</h2>
				<FormGroup>
					<label>Email</label>
					<Input type="email" placeholder="Email"/>
				</FormGroup>
				<FormGroup>
					<label>Password</label>
					<Input type="password" placeholder="Password"/>
				</FormGroup>
				<Button variant="primary" size="lg">
                    LOG IN
                </Button>	
				<div className="text-center pt-3">
				    or continue with google account	
				</div>
				<GoogleLoginButton className="mt-3 mb-3"/>	
				<div className="text-center">
					<a href="/sign-up">Sign up</a>
					<span className="p-2">|</span>
					<a href="/forgot-password">Forgot Password</a>
				</div>
			</Form>
	    );
    }
}	

export default Login;
