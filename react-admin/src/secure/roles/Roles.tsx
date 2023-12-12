import React, {Component} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import {Role} from "../../classes/role";
import {Link} from "react-router-dom";

class Roles extends Component {

  state = {
    roles: []
}

  componentDidMount = async () => {
    const response = await axios.get('roles/');
    console.log('response: ', response);
    this.setState({
      roles: response.data.data
  });
    
  }

  deleteRole = async (id:number) =>  {

    if (window.confirm("Delete the role?")){
      await axios.delete(`roles/${id}/`)

  }

  this.setState({
      users: this.state.roles.filter((r: Role) => r.id !== id)
    
  })

  }

  render() {

    return (
      <Wrapper>
           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={'/roles/create/'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
           <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.roles.map(
                            (role: Role) => {
                                return (
                                    <tr key={role.id}>
                                        <td>{role.id}</td>
                                        <td>{role.name}</td>
                                        <td>
                                        <div className="btn-group mr-2">
                                                    <Link to={`/roles/${role.id}/edit/`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                                    <a className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteRole(role.id)}>Delete</a>
                                                </div>
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
      </Wrapper>
    )
    
  }

}

export default Roles;