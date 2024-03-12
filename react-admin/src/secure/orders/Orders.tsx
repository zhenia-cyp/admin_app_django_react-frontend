import React, {Component} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import {Link} from "react-router-dom";
import {Order} from "../../classes/order";
import {Paginator} from "../components/Paginator";


class Orders extends Component {
    state = {
        orders: []
    }
    page = 1;
    last_page = 0;
    newOrders: any;

    componentDidMount = async () =>  {
        const response = await axios.get(`orders/get/orders/?page=${this.page}`);
        this.setState({
            orders: response.data.data
        })
        this.last_page = response.data.meta.last_page;

    }

    handlePageChange = async (page: number) => {
        this.page = page;
        await this.componentDidMount();

    }

    handleCsv = async () => {
        const response = await axios.get('orders/export/csv/', {responseType: 'blob'});
        const blob = new Blob([response.data], {type: 'text/csv'});
        const downloadUrl = window.URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'orders.csv';
        link.click();
    }
    render(){
       return (
           <Wrapper>
               <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                   <div className="btn-toolbar mb-2 mb-md-0">
                       <a onClick={this.handleCsv} className="btn btn-sm btn-outline-secondary">export to csv</a>
                   </div>
                   </div>
                   <div className="table-responsive">
                       <table className="table table-striped table-sm">
                           <thead>
                           <tr>
                               <th scope="col">#</th>
                               <th scope="col">Name</th>
                               <th scope="col">Email</th>
                               <th scope="col">Total</th>
                               <th scope="col">Action</th>
                           </tr>
                           </thead>
                           <tbody>

                           {this.state.orders.map(
                               (order: Order, index) => {
                                   return (
                                       <tr>
                                           <td>{order.order_num}</td>
                                           <td>{order.first_name} {order.last_name}</td>
                                           <td>{order.email}</td>
                                           <td>{order.total}</td>
                                           <td>
                                               <div className="btn-group mr-2">
                                                   <Link to={`/orders/${order.id}/`}
                                                         className="btn btn-sm btn-outline-secondary">View</Link>

                                               </div>
                                           </td>
                                       </tr>
                                   )

                               }
                           )}

                           </tbody>
                       </table>
                   </div>
                   <Paginator lastPage={this.last_page} handlePageChange={this.handlePageChange}/>
           </Wrapper>
    )
    }
    }

    export default Orders;