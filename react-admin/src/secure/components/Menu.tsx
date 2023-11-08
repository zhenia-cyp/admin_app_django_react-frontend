import React from "react";

const Menu = () => (
    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                    <svg className="bi"><use xlinkHref="#house-fill"/></svg>
                    Dashboard
                </a>
            </li>
        </ul>
    </div>
)

export default Menu;