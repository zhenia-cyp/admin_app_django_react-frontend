import React, {Component, SyntheticEvent} from "react";
import './Public.css';
import axios from 'axios'
import { Navigate } from "react-router-dom";


class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';
    state = {
        redirect: false
    };

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response= await axios.post('http://0.0.0.0:8000/api/v1/users/register/',  {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm
        });
        this.setState({
            redirect: true
        })
    }
    render() {
        if (this.state.redirect) {
            return <Navigate to="/login"/>
        }
        return (
            <div>
                <form className="form-signin" onSubmit={this.submit}>
                    <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="First Name" required
                           onChange={e => this.first_name = e.target.value}
                    />

                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Last Name" required
                           onChange={e => this.last_name = e.target.value}
                    />

                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                           onChange={e => this.email = e.target.value}
                    />

                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                           onChange={e => this.password = e.target.value}
                    />

                    <label htmlFor="passwordConfirm" className="sr-only">Password Confirm</label>
                    <input type="password" id="passwordConfirm" className="form-control" placeholder="Password Confirm" required
                           onChange={e => this.password_confirm = e.target.value}
                    />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </form>
            </div>
        );
    }
}
export default Register;