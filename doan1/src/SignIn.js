import React from 'react';
import axios from 'axios';
import { Component } from 'react';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }
    post = () => {
        var {username, password} = this.state;
        axios.post(
            'http://localhost:3000/user',
            {
                username: username,
                password: password
            }            
        )
        .then(
            function(response){
                console.log('Success');
            }
        )
        .catch(
            function(error)
            {
                console.log('Fail');
            }
        )
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState(
            {
                [name]: value
            }
        );
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.post();
    }
    render(){
        return(
            <div>
                
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                                <h3 className="panel-title">Sign in</h3>
                        </div>
                        <div className="panel-body">                                
                                <form onSubmit = {this.onSubmit}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" id="" name = "username" onChange = { this.onChange } />
                                        <label>Password</label>
                                        <input type="text" className="form-control" id="" name = "password" onChange = { this.onChange } />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </form>                                
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SignIn;