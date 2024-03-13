import React, {Component, SyntheticEvent} from "react";
import axios from 'axios';
import Wrapper from "../Wrapper";
import {User} from "../../classes/user";



class Profile extends Component<any>{
    state = {
        first_name: '',
        last_name: '',
        email: '',
    }
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    componentDidMount = async () => {
        const response = await axios.get('users/user/');
        const user: User = response.data.data;
        this.setState({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        })
    }

    updateInfo = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.put('users/info/', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
        })

        const user: User = response.data;
        this.setState({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        })

    }

    updatePassword = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put('users/password/', {
            password: this.password,
            password_confirm: this.password_confirm
        })
    }
    render() {
        return (
            <Wrapper>
                <h2>Account Information</h2>
                <hr/>
                <form onSubmit={this.updateInfo}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="first_name"
                               defaultValue={this.first_name = this.state.first_name}
                               onChange={e => this.first_name = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="last_name"
                               defaultValue={this.last_name = this.state.last_name}
                               onChange={e => this.last_name = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"
                               defaultValue={this.email = this.state.email}
                               onChange={e => this.email = e.target.value}
                        />
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>

                <h2 className="mt-4">Change Password</h2>
                <hr/>
                <form onSubmit={this.updatePassword}>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"
                               onChange={e => this.password = e.target.value}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password Confirm</label>
                        <input type="password" className="form-control" name="password_confirm"
                               onChange={e => this.password_confirm = e.target.value}
                        />
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>
            </Wrapper>
        )
    }
}

export default Profile;