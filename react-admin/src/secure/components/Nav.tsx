import React, {Component} from 'react';
import axios from 'axios';
import {Navigate, Link} from "react-router-dom";
import {User} from "../../classes/user";
import {connect} from "react-redux";



class Nav extends Component<{user: User}>{

    state = {
        redirect: false
    }

    // componentDidMount = async () => {
    //
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //         try {
    //             const response = await axios.get('users/user/');
    //             this.setState({
    //                 user: response.data.data
    //             })
    //
    //         } catch (e) {
    //             console.log('Authentication error:', e);
    //             this.setState({
    //                 redirect: true
    //             })
    //         }
    //     }
    //     else {
    //         this.setState({
    //             redirect: true
    //         })
    //     }
    // }
    handeleClick = async () => {
        localStorage.clear();
        try {
            await axios.post('users/logout/', {'removetoken': true});
            this.setState({redirect: true});

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
                              className="p-2 text-white">{this.props.user.first_name} {this.props.user.last_name}</Link>
                        <Link to={''} className="p-2 text-white navbar-nav" onClick={this.handeleClick}>Sign out</Link>
                    </li>
                </ul>
            </nav>
        )
    }

}

// @ts-ignore
// export default Nav;
// @ts-ignore
export default connect(state => ({user: state.user}))(Nav);