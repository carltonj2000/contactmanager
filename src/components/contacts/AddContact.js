import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../../context";

import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "")
      return this.setState({ errors: { name: "Name Is Required!" } });
    if (email === "")
      return this.setState({ errors: { email: "Email Is Required!" } });
    if (phone === "")
      return this.setState({ errors: { phone: "Phone Is Required!" } });
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users/`,
      { name, email, phone }
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({ name: "", email: "", phone: "", errors: {} });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {({ dispatch }) => (
          <div className="card mb-3">
            <div className="card-header">
              <h1>Add Contact</h1>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup
                  name="name"
                  onChange={this.onChange}
                  value={name}
                  error={errors.name}
                />
                <TextInputGroup
                  name="email"
                  onChange={this.onChange}
                  value={email}
                  error={errors.email}
                />
                <TextInputGroup
                  name="phone"
                  onChange={this.onChange}
                  value={phone}
                  error={errors.phone}
                />
                <input
                  type="submit"
                  value="Add Contact"
                  className="bt btn-block btn-light"
                />
              </form>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}
export default AddContact;
