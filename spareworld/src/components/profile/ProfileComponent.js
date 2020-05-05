import React from "react";
import axios from "axios";
import { Link, Redirect, NavLink } from "react-router-dom";
import HeaderComponent from "../header/HeaderComponent";

class ProfileComponent extends React.Component {
  state = {
    register: {},
    userid: localStorage.getItem("userid"),
    config: {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/register/me", this.state.config)
      .then(response => {
        console.log(response.data);
        localStorage.setItem("userid", response.data._id);
        this.setState({
          register: response.data
        });
      });
  }

  handleChange = e => {
    this.setState({
      register: this.state.register,
      [e.target.name]: e.target.value
    });
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    this.props.history.push("/login");
  };
  updateUser = e => {
    e.preventDefault();
    axios
      .put(
        "http://localhost:4000/register/me",
        this.state.register,
        this.state.config
      )
      .then(response => console.log(response.data))
      .catch(err => console.log(err.response));
    this.props.history.push("/dashboard");
  };

  render() {
    if (localStorage.getItem("userid") == null) {
      return <Redirect to="/login" />;
    }
    return (
      <div class="container">
        <div class="row">
          <div className="col-sm-2"></div>
          <div class=" col-sm-8">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h2 class="card-title text-center">Register</h2>
                <form>
                  <div class="form-label-group">
                    <input
                      type="text"
                      id="inputEmail"
                      class="form-control"
                      required
                      name="fname"
                      autofocus
                      value={this.state.register.fname}
                      onChange={this.handleChange}
                    />
                    <label for="inputEmail">First Name</label>
                  </div>
                  <div class="form-label-group">
                    <input
                      type="text"
                      id="inputEmail"
                      class="form-control"
                      required
                      name="lname"
                      autofocus
                      value={this.state.register.lname}
                      onChange={this.handleChange}
                    />
                    <label for="inputEmail">Last Name</label>
                  </div>
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      required
                      name="email"
                      autofocus
                      value={this.state.register.email}
                      onChange={this.handleChange}
                    />
                    <label for="inputEmail">Email address</label>
                  </div>
                  <div class="form-label-group">
                    <input
                      type="text"
                      id="inputEmail"
                      class="form-control"
                      required
                      name="address"
                      autofocus
                      value={this.state.register.address}
                      onChange={this.handleChange}
                    />
                    <label for="inputEmail">Address</label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="number"
                      id="inputPassword"
                      class="form-control"
                      name="number"
                      placeholder="Number"
                      required
                      value={this.state.register.number}
                      onChange={this.handleChange}
                    />
                    <label for="inputPassword">Number</label>
                  </div>
                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={this.updateUser}
                  >
                    Update
                  </button>
                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={this.handleLogout}
                  >
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileComponent;
