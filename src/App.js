import React,{ Component } from "react";
import { Router } from "react-router-dom";
import Login from './log'
import './log.css'
function App() {
	return (
		<div>
			<h1 align="center">DriveKart.com</h1>
			<div className="new-p">
				<h2>
                     About DriveKart:
				</h2>
                <div>DriveKart is a single platform for</div>
                <div>connecting dealers with drivers.</div>
				<div>Dealers can log in and source drivers as per
				their convinence, whereas Drivers can</div>
				<div>create their profile and get hired</div> 
				
			</div>
			<Login/>
		</div>	
	);
}

export default App;
