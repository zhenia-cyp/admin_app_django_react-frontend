import React, {ReactNode} from "react";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import axios from "axios";
import {Navigate} from "react-router-dom";



interface WrapperProps {
    children: ReactNode;
}

class Wrapper extends React.Component<WrapperProps> {
    state = {
        redirect: false
    }
    componentDidMount = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            try {
                await axios.get('user/');
            } catch (e) {
                console.log('Authentication error:',e);
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
            return <Navigate to="/login"/>
        }
        return (
            <>
                <Nav/>
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
export default Wrapper;