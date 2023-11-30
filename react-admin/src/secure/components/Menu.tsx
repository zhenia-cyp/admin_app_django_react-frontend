import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => (
    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul className="nav flex-column">
            <li className="nav-item">
                <NavLink to={'/dashboard/'} className="nav-link d-flex align-items-center gap-2" aria-current="page" >
                    Dashboard
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to={'/get/users/'} className="nav-link d-flex align-items-center gap-2" aria-current="page" >
                    Users
                </NavLink>
            </li>
        </ul>
    </div>
)

export default Menu;