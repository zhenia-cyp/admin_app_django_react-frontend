import React, {Component} from "react"
import Wrapper from "../Wrapper";
import axios from "axios";
import {User} from "../../classes/user";
import {Link} from "react-router-dom";
import {Paginator} from "../components/Paginator";
import {Deleter} from "../components/Deleter";
import {connect} from "react-redux";



class Users extends Component<{user:User}> {
    state = {
        users: []
    }

    page = 1;
    last_page = 0;
    componentDidMount = async () => {
        const response = await axios.get(`users/get/users/?page=${this.page}`);
        
        this.setState({
            users: response.data.data
        });

        this.last_page = response.data.meta.last_page;
        console.log(this.last_page)
    }

    handlePageChange = async (page: number) => {
        this.page = page;
        await this.componentDidMount();

    }

    handleDelete = async (id: number) => {
        this.setState({
            users: this.state.users.filter((u: User) => u.id !== id)
        })

    }

    actions = (id: number) => {
        if (this.props.user.canEdit('users')) {
            return (
                <div className="btn-group mr-2">
                    <Link to={`/users/${id}/edit`}
                          className="btn btn-sm btn-outline-secondary">Edit</Link>
                    <Deleter id={id} endpoint={'users'}
                             handleDelete={this.handleDelete}/>
                </div>
            )
        }
    }
    render (){
        let addButton = null;
        if(this.props.user.canEdit('users')){
            addButton = (
                <div className="btn-group mr-2">
                    <Link to={`/get/users/${this.props.user.id}/edit/`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                    <Deleter id={this.props.user.id} endpoint={'users/get/users'} handleDelete={this.handleDelete}/>
                </div>
            )

        }
        return (
            <Wrapper>
                {addButton}
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.users.map(
                            (user: User) => {
                                    return (
                                        <tr>
                                            <td>{user.order_num}</td>
                                            <td>{user.first_name} {user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role ? user.role.name : 'No Role'}</td>
                                            <td>{this.actions(user.id)} </td>
                                        </tr>
                                    )

                            }
                        )}

                        </tbody>
                    </table>
                </div>
                <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange}/>
            </Wrapper>
        )
    }
}
// @ts-ignore
export default connect(state => ({user: state.user}))(Users);