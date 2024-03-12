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
        console.log('orders:',response);

        console.log('newOrders:', this.newOrders);
        this.setState({
            orders: response.data.data
        })
        this.last_page = response.data.meta.last_page;

    }

    handlePageChange = async (page: number) => {
        this.page = page;
        await this.componentDidMount();

    }

    render(){
       return (
           <Wrapper>
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
                           (order: Order,index) => {
                               return (
                                   <tr>
                                       <td>{order.order_num}</td>
                                       <td>{order.first_name} {order.last_name}</td>
                                       <td>{order.email}</td>
                                       <td>{order.total}</td>
                                       <td>
                                           <div className="btn-group mr-2">
                                               <Link to={`/get/users/${order.id}/edit/`}
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