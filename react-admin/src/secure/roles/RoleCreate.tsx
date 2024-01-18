import React, {Component, SyntheticEvent} from 'react';
import axios from 'axios';
import {Permission} from "../../classes/permission";
import {Navigate} from "react-router-dom";



class RoleCreate extends Component {

  state = {
    permissions: [],
    redirect: false
   }
  selected: number[] = [];
  name = '';

  
  componentDidMount = async () => {
    const token = localStorage.getItem('token');
    if (token){
      const response = await axios.get('permissions/',{
        headers: {
          Authorization: `Bearer ${token}`  
        }
      });
      this.setState({
          permissions: response.data.data
      })
    }
    
  }

  check = (id: number) => {
    
    if (this.selected.filter(s => s === id).length > 0) {
        this.selected = this.selected.filter(s => s !== id);
        return;
    }

    this.selected.push(id);
}
  
  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('roles/', {
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
                                    <input className="form-check-input" type="checkbox" value={p.id}
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
export default RoleCreate;