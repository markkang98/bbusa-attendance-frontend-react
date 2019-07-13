import React from 'react';

export default class LogOutButton extends React.Component{
    constructor(props){
        super(props);
        this.state ={status: ''}
    }
    logOut(){
        event.preventDefault();
        fetch("http://127.0.0.1:5000/logOut",{
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
