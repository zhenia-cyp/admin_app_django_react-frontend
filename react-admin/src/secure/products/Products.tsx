import React, {Component} from 'react';
import Wrapper from "../Wrapper";
import {Link} from "react-router-dom";
import axios from "axios";
import {Product} from "../../classes/product";


class Products extends Component {

  state = {
    products: []
  }


  componentDidMount = async () => {
    const response = await axios.get('products/products/');
    console.log('Products response: ', response)

    this.setState(
      {
        products: response.data.data
      }
    )
  }

  deleteProduct = async (id: number) => {

    if (window.confirm("Delete the product?")){
      await axios.delete(`products/product/${id}/`)

  }

  this.setState({
      products: this.state.products.filter((p: Product) => p.id !== id)

  })

}


  render(){
    return (
      
      <Wrapper>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <Link to={'/products/create/'} className="btn btn-sm btn-outline-secondary">Add</Link>
                    </div>
                </div>
           <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map(
                            (product: Product) => {
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td><img src={product.image} width="50"/></td>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>
                                        <div className="btn-group mr-2">
                                                    <Link to={`/products/${product.id}/edit/`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                                    <a className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteProduct(product.id)}>Delete</a>
                                                </div>
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                        </tbody>
                    </table>
                </div>
        </Wrapper>
    );
  }

}
export default Products;