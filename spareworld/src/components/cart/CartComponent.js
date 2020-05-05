import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class CartComponent extends React.Component {
    state = {
        cart: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/cart/check/' + localStorage.getItem('userid'))
            .then((response) => {
                console.log(response.data)
                this.setState({
                    cart: response.data

                })
            })
    }

    deletecart = (productid) => {
        var x = confirm("Are you sure you want to delete from cart?");//eslint-disable-line
        if (x) {

            axios.delete("http://localhost:4000/cart/deletecart/" + productid);
            location.reload();//eslint-disable-line
        }
        else {
            return false;
        }

    }
    render() {
        if (localStorage.getItem("userid") == null) {
            return <Redirect to='/login' />
        }
        const mydata = this.state.cart.map(cart => {
            return (
                <div class="container">
                    <table id="cart" class="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th style={{ width: '90%' }}>Name</th>
                                <th style={{ width: '15%' }}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-th="Product">
                                    <div class="row">

                                        <div class="col-sm-12">
                                            <h4 class="nomargin">{cart.name}</h4>
                                            <p>{cart.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Subtotal" class="text-center">{cart.price}</td>

                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><a href="#" onClick={() => this.deletecart(cart._id)} class="btn btn-warning"><i class="fa fa-angle-left"></i>Delete Cart</a></td>
                                <td class="hidden-xs text-center"><strong>{cart.price}</strong></td>
                                <NavLink to={`/order/${cart.productid}`}>
                                    <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
                                </NavLink>
                            </tr>
                        </tfoot>
                    </table>
                </div >
            )
        })
        return (
            <div className="container" >
                <div className="row">

                    <div class="table-responsive">
                        <table class="table" id="table">
                            <h1 className="text-center">Your Cart</h1>
                            {mydata}
                        </table>

                    </div>
                </div >
            </div >
        )
    }
}

export default CartComponent;