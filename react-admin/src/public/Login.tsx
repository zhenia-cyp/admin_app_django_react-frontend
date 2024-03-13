import React, {Component, SyntheticEvent} from 'react';
import './Public.css';
import axios from "axios";
import {Navigate} from "react-router-dom";



class Login extends Component {
    email= '';
    password = '';
    state = {
        redirect: false
    }
    submit =  async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await axios.post('users/login/',  {
            email: this.email,
            password: this.password
        });
        
        const token = response.data.jwt;
        localStorage.setItem('token', token);
        this.setState({
            redirect: true
        })
    }

    render(){
        if (this.state.redirect) {
            return <Navigate to="/"/>
        }
        return (
            <form className="form-signin" onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                               onChange={e => this.email = e.target.value}
                        />

                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={e => this.password = e.target.value}
                        />
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>
        )
    }

}

export default Login;

