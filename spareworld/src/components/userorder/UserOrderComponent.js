import React from "react";
import axios from "axios";
import "../userorder/order.scss";
import SimpleReactValidator from "simple-react-validator";

class UserOrderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      name: "",
      price: "",
      billingaddress: "",
      billingnumber: "",
      ordernumber: "",
      quantity: "",
      userid: localStorage.getItem("userid")
    };
    this.validator = new SimpleReactValidator();
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      console.log(this.state);
      axios
        .post("http://localhost:4000/order/addorder1", this.state)
        .then(response => {
          console.log(response);
          this.setState({
            name: "",
            price: "",
            billingaddress: "",
            billingnumber: "",
            ordernumber: "",
            quantity: ""
          });
        })
        .catch(err => console.log(err));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/product/" + this.props.match.params.id)
      .then(response => {
        console.log(response.data);
        this.setState({
          product: response.data
        });
      });
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div className="col-sm-2"></div>
          <div class=" col-sm-8">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h2 class="card-title text-center">Order Form</h2>
                <form name="myForm">
                  <div class="form-label-group">
                    <input
                      type="text"
                      id="inputEmail"
                      class="form-control"
                      required
                      name="billingaddress"
                      autofocus
                      value={this.state.billingaddress}
                      onChange={this.handleChange}
                      required
                    />
                    {this.validator.message(
                      "Address",
                      this.state.billingaddress,
                      "required"
                    )}
                    <label for="inputEmail">Address</label>
                  </div>
                  <div class="form-label-group">
                    <input
                      type="number"
                      id="inputEmail"
                      class="form-control"
                      required
                      name="quantity"
                      autofocus
                      value={this.state.quantity}
                      onChange={this.handleChange}
                      required
                    />
                    {this.validator.message(
                      "Quantity",
                      this.state.quantity,
                      "required"
                    )}
                    <label for="inputEmail">Quantity</label>
                  </div>
                  <div class="form-label-group">
                    <input
                      type="number"
                      id="inputEmail"
                      class="form-control"
                      required
                      name="billingnumber"
                      value={this.state.billingnumber}
                      onChange={this.handleChange}
                      required
                    />
                    {this.validator.message(
                      "Number",
                      this.state.billingnumber,
                      "required"
                    )}
                    <label for="inputEmail">Number</label>

                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputEmail"
                        class="form-control"
                        required
                        name="name"
                        autofocus
                        value={this.state.product.name}
                        onChange={this.handleChange}
                        disabled
                      />
                      <label for="inputEmail">Name</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="text"
                        id="inputEmail"
                        class="form-control"
                        required
                        name="ordernumber"
                        value={this.state.ordernumber}
                        onChange={this.handleChange}
                        disabled
                      />
                      <label for="inputEmail">Order Number</label>
                    </div>
                    <button
                      class="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
                      Confirm Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserOrderComponent;
