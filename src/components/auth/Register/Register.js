import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  faPencilAlt,
  faPalette,
  faUpload,
  faShare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signUp } from "../../../store/actions/authAction";
import "./Register.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    message: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    let login = await this.props.signUp(this.state);
    if (login) {
      this.props.history.push("/");
    }
  };

  onChangeHandle = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { authError } = this.props;
    return (
      <section className="container">
        <section className="row ">
          <section className="col-md-7 ">
            <h1 className="text-left">MEMES-SHIRT</h1>
            <br />
            <FontAwesomeIcon
              icon={faPalette}
              style={{ fontSize: "30px", float: "left", marginTop: "3px" }}
            />
            {""}
            <p>Create your favorite shirt design</p>
            <br />
            <br />
            <FontAwesomeIcon
              icon={faUpload}
              style={{ fontSize: "30px", float: "left", marginTop: "3px" }}
            />
            {""}
            <p>Save in our System</p>
            <br />
            <br />
            <FontAwesomeIcon
              icon={faShare}
              style={{ fontSize: "30px", float: "left", marginTop: "3px" }}
            />
            {""}
            <p>Share with others</p>
          </section>
          <section className="col-md-5 formContainer">
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-left">Registration Form</h3>
              </div>
              <div className="col-md-6">
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  style={{ fontSize: "30px", float: "right", marginTop: "3px" }}
                />
              </div>
            </div>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="row">
                  <label className="label col-md-2 control-label">Email</label>
                  <div className="col-md-10">
                    <input
                      type="email"
                      className="form-control formInput"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeHandle}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <label className="label col-md-2 control-label">
                    Password
                  </label>
                  <div className="col-md-10">
                    <input
                      type="password"
                      className="form-control formInput"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangeHandle}
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <label className="label col-md-2 control-label">
                    Message
                  </label>
                  <div className="col-md-10">
                    <textarea
                      name="message"
                      value={this.state.message}
                      onChange={this.onChangeHandle}
                      className="form-control formInput"
                      placeholder="Why you join this app?"
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
              <button type="submit" className="btn btn-warning ">
                Cancel
              </button>

              <div className="container  text-center">
                {authError ? (
                  <small className="text-danger">{authError}</small>
                ) : null}
              </div>
            </form>
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.auth.authError
});
const actions = {
  signUp
};
export default connect(
  mapStateToProps,
  actions
)(Register);
