import React, {ReactNode,Dispatch} from "react";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {User} from "../classes/user";
import setUser from "../redux/actions/setUserAction";




interface WrapperProps {
    children: ReactNode;
}

class Wrapper extends React.Component<any>{
    state = {
        user: null,
        redirect: false
    }
    componentDidMount = async () => {

        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            try {
                const response = await axios.get('users/user/');
                console.log('Wrapper response: ', response.data.data)
                const user: User = response.data.data;
                this.props.setUser(new User(
                    user.id,
                    user.first_name,
                    user.last_name,
                    user.email,
                    user.role,
                    user.permissions,
                ));
            } catch (e) {
                console.log('Authentication error:',e);
                this.setState({
                    redirect: true

                })

            }
        }
        else {
            this.setState({
                redirect: true
            })
        }
    }// end

    render() {
        if(this.state.redirect) {
            return <Navigate to="/login/" />
        }
        return (
            <>
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <Menu/>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state: { user: User }) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);