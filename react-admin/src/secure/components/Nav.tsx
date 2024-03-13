import React, {Component} from 'react';
import axios from 'axios';
import {Navigate, Link} from "react-router-dom";
import {User} from "../../classes/user";




class Nav extends Component{

    state = {
        user: new User(),
        redirect: false
    }

    componentDidMount = async () => {

        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            try {
                const response = await axios.get('users/user/');
                this.setState({
                    user: response.data.data
                })

            } catch (e) {
                console.log('Authentication error:', e);

            }
        }
    }
    handeleClick = async () => {
        localStorage.clear();
        try {
            await axios.post('logout/', {'removetoken': true});

        } catch (error) {
            this.setState({redirect: true});
            console.log(error);
        }
    }
    render() {
        if (this.state.redirect) {
            return <Navigate to="/login"/>
        }
        return (
            <nav className="navbar navbar-dark sticly-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed"
                        data-toggle="collapse"
                        data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                        aria-label="Toggle navigation"
                        type="button">
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search"
                       aria-label="Search"/>
                <ul className="navbar-nav px-2">
                    <li className="nav-item text-nowrap">
                        <Link to={'/profile'}
                              className="p-2 text-white">{this.state.user.first_name} {this.state.user.last_name}</Link>
                        <a className="nav-link p-2 text-white" href="#" onClick={this.handeleClick}>Sign out</a>
                    </li>
                </ul>
            </nav>
        )
    }

}

// @ts-ignore
export default Nav;