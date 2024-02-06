import React, {Component} from "react"
import Wrapper from "../Wrapper";
import axios from "axios";
import {User} from "../../classes/user";
import {Link} from "react-router-dom";
import {Paginator} from "../components/Paginator";
import {Deleter} from "../components/Deleter";



class Users extends Component {
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
    render (){

        return (
            <Wrapper>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={'/get/users/create/'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
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
                                            <td>
                                                <div className="btn-group mr-2">
                                                    <Link to={`/get/users/${user.id}/edit/`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                                    <Deleter id={user.id} endpoint={'users/get/users'} handleDelete={this.handleDelete}/>
                                                </div>
                                            </td>
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
export default Users;