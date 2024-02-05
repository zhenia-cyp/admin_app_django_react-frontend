import React, {Component, SyntheticEvent} from 'react';
import axios from 'axios';
import {Permission} from "../../classes/permission";
import {Navigate} from "react-router-dom";
import withRouter from '../users/withRouter';
import { Role } from '../../classes/role';



class RoleEdit extends Component<any> {

  state = {
    name: '',
    selected: [],
    permissions: [],
    redirect: false
   }
  selected: number[] = [];
  name = '';
  id = 0;
  
  componentDidMount = async () => {
    this.id = Number(this.props.params.id);
    console.log('RoleEdit: ', this.id);
    const token = localStorage.getItem('token');
    
    if (token){
      const permissionCall = await axios.get('users/permissions/',{
        headers: {
          Authorization: `Bearer ${token}`  
        }
      });
      const roleCall = await axios.get(`users/roles/${this.id}`);
      const role: Role = roleCall.data.data;
      this.selected = role.permissions.map((p: Permission) => p.id);
      this.setState({
          name: role.name,
          selected: this.selected,
          permissions: permissionCall.data.data
      })
    }
    
  }

  check = (id: number) => {
    
    if (this.isChecked(id)) {
        this.selected = this.selected.filter(s => s !== id);
        return;
    }

    this.selected.push(id);
}

  isChecked = (id: number) => {
       return this.state.selected.filter(s => s === id).length > 0;
  }
  
  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.put(`users/roles/${this.id}/`, {
        name: this.name,
        permissions: this.selected
    }, {
      headers: {
        'Authorization': `Bearer ${token}`  
      }})

    this.setState({
        redirect: true
    })
  }

  render(){
    if (this.state.redirect) {
      return <Navigate to={'/roles/'}/>;
}
    return (
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <form onSubmit={this.submit}>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="name" id="name"
                          defaultValue={this.name = this.state.name}
                          onChange={e => this.name = e.target.value}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Permissions</label>
                <div className="col-sm-10">
                    {this.state.permissions.map(
                        (p: Permission) => {
                            return (
                                <div className="form-check form-check-inline col-3" key={p.id}>
                                    <input className="form-check-input" type="checkbox" 
                                          value={p.id}
                                          defaultChecked={this.isChecked(p.id)}
                                          onChange={e => this.check(p.id)}
                                    />
                                    <label className="form-check-label">{p.name}</label>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>

            <button className="btn btn-outline-secondary">Save</button>
      </form>
  </div>
    )
  }
}
export default withRouter(RoleEdit);