import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark sticly-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
          <button className="navbar-toggler position-absolute d-md-none collapsed"
                  data-toggle="collapse"
                  data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                  aria-label="Toggle navigation"
                  type="button">
          </button>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search"
          aria-label="Search"/>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">Sign out</a>

            </li>

          </ul>

        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
              <div className="offcanvas-md offcanvas-end bg-body-tertiary" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                        <svg className="bi"><use xlinkHref="#house-fill"/></svg>
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#file-earmark"/></svg>
                        Orders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#cart"/></svg>
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#people"/></svg>
                        Customers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#graph-up"/></svg>
                        Reports
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#puzzle"/></svg>
                        Integrations
                      </a>
                    </li>
                  </ul>

                  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                    <span>Saved reports</span>
                    <a className="link-secondary" href="#" aria-label="Add a new report">
                      <svg className="bi"><use xlinkHref="#plus-circle"/></svg>
                    </a>
                  </h6>
                  <ul className="nav flex-column mb-auto">
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                        Current month
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                        Last quarter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                        Social engagement
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center gap-2" href="#">
                        <svg className="bi"><use xlinkHref="#file-earmark-text"/></svg>
                        Year-end sale
                      </a>
                    </li>
                  </ul>



                  <ul className="nav flex-column mb-auto">
                      <li className="nav-item">
                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                          <svg className="bi"><use xlinkHref="#gear-wide-connected"/></svg>
                          Settings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link d-flex align-items-center gap-2" href="#">
                          <svg className="bi"><use xlinkHref="#door-closed"/></svg>
                          Sign out
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                  </div>
                  <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                    <svg className="bi"><use xlinkHref="#calendar3"/></svg>
                    This week
                  </button>
                </div>
              </div>

              <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>

              <h2>Section title</h2>
              <div className="table-responsive small">
                <table className="table table-striped table-sm">
                  <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
    </div>

);
}

export default App;
