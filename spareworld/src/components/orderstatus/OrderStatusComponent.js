import React from "react";
import axios from "axios";

class OrderStatusComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    if (this.state.id == "") {
      alert("Enter Product id");
      return;
    }
    e.preventDefault();
    axios
      .get("http://localhost:4000/order/orderget/" + this.state.id)
      .then(response => {
        console.log(response);
        const ans = response.data.status;
        if (ans == "Successfully Dispatched") {
          alert("Your Product is ready for dispatch");
          return;
        } else if (ans == "Not Dispatched") {
          alert("Not Dispatched till now");
          return;
        } else {
          alert("Please check your order id");
          return;
        }
      })
      .catch();
  };

  render() {
    return (
      <div>
        <label>
          Order ID:
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={this.handleClick} />
      </div>
    );
  }
}

export default OrderStatusComponent;
