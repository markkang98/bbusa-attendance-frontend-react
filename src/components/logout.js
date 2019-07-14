import React from 'react';
import {properties} from './properties.js';
export default class LogOutButton extends React.Component{
    constructor(props){
        super(props);
        this.state ={status: ''}
    }
    logOut(){
        event.preventDefault();
        fetch(properties.host + "/logOut",{
            method: 'POST',
            credentials: "include",
            mode: "cors"
        })
        .then(res => res.json).then((response)=>{
            window.location.href = "index.html";
        })
    }
    render(){
        return(
            <div>
            <button onClick = {this.logOut.bind(this)}>Log Out</button>
            <h1>{this.state.status}</h1>
            </div>
        )
    }
}
