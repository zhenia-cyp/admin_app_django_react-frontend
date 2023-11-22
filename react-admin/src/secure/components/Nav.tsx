import React, {Component} from 'react';
import axios from 'axios';
import {Navigate} from "react-router-dom";

class Nav extends Component{
    state = {
        redirect: false
    }
    handeleClick = async () => {
        localStorage.removeItem('token');
        try {
            await axios.post('logout/', {'removetoken': true});
            this.setState({redirect: true});
        } catch (error) {
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
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#" onClick={this.handeleClick}>Sign out</a>
                    </li>
                </ul>
            </nav>
        )
    }

}

// @ts-ignore
export default Nav;