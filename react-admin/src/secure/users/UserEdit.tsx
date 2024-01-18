import {Component, SyntheticEvent} from 'react';
import withRouter from './withRouter';
import Wrapper from '../Wrapper';
import {Role} from '../../classes/role';
import axios from "axios";
import {User} from "../../classes/user";
import {Navigate} from "react-router-dom";



class UserEdit extends Component<any> {

  state = {
    roles: [],
    first_name: '',
    last_name: '',
    email: '',
    role_id: 0,
    redirect: false
  }

  id = 0;
  first_name = '';
  last_name = '';
  email = '';
  role_id = 0; 

  componentDidMount = async () => {
    this.id = Number(this.props.params.id);
    const rolesCall = await axios.get('roles/');
    const userCall = await axios.get(`get/users/${this.id}/`);
    const user: User = userCall.data.data;
    console.log('user edit: ', user );
    

    this.setState({ 
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role_id: user.role.id,
      roles: rolesCall.data.data
      
    })
  }

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const userData = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      role_id: this.role_id}

    await axios.put(`get/users/${this.id}/`, userData);

    this.setState({
        redirect: true
    })

}

  render(){
    if (this.state.redirect) {
        return <Navigate to={'get/users/'}/>;
  }
    return(
        <Wrapper>
            <form onSubmit={this.submit}>
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

                    <div className="form-group">
                        <label>Role</label>
                        <select name="role_id" className="form-control"
                                value={this.role_id = this.state.role_id}
                                onChange={e => {
                                    this.role_id = parseInt(e.target.value);
                                    this.setState({
                                        role_id: this.role_id
                                    })
                                }}
                        >
                            <option>Select Role</option>
                            {this.state.roles.map(
                                (role: Role) => {
                                    return (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    )
                                }
                            )}
                        </select>
                    </div>

                    <button className="btn btn-outline-secondary">Save</button>
                </form>

        </Wrapper>
    
    );
  }
}

export default withRouter(UserEdit);

