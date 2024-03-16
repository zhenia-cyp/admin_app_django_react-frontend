import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {User} from "../../classes/user";

class Menu extends Component<{ user: User }> {
    menuItems = [
        {
            link: '/get/users/',
            name: 'Users'
        },
        {
            link: '/roles/',
            name: 'Roles'
        },
        {
            link: '/products/',
            name: 'Products'
        },
        {
            link: '/orders/',
            name: 'Orders'
        }
    ]

    render(){
        let menu: JSX.Element[] = [];
        this.menuItems.forEach(item => {
            console.log('item: ',item.name);
            if (this.props.user.canView(item.name.toLowerCase())) {
                menu.push(
                    <li className="nav-item">
                        <NavLink to={item.link} className="nav-link">
                            {item.name}
                        </NavLink>
                    </li>
                );
            }
        });
        return (
            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to={'/dashboard/'} className="nav-link">
                            Dashboard
                        </NavLink>
                    </li>
                    {menu}
                </ul>
            </div>
        )
    }

}

// @ts-ignore
export default connect(state => ({user: state.user}))(Menu);
