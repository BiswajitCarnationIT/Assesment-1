import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Style2.css";
import logo from "./logo.png";

class SignUp extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="BackGround">
        <div className="Logo">
          <div className="child">
            <img src={logo} alt="logo of care.com" />
          </div>
          <div className="TopManue">
            <div className="child">contact us | </div>
            <div className="child">
              <select className="country" name="country" id="counrty">
                <option value="country">Change country</option>
              </select>
            </div>
            <div className="child">
              <div>
                <button type="button" className="ContainerLogIn">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="enrollContainer">
              <h1>Enroll</h1>
              <h3>The right care could be right around the corner</h3>
            </div>
          </div>
          <div className="column">
            <div className="AreYouNew">
              <h3>Are you new to Care.com?</h3>
              <div className="bottonPrent">
                <botton type="botton" className="botton1">
                  Yes
                </botton>
                <botton type="botton" className="botton1">
                  No
                </botton>
              </div>
             
              <h3>Complete These fields to activate your benefit</h3>
              <input
                type="text"
                id="employeeID"
                placeholder="Employee ID"
              ></input>
              <br></br>
              <input
                type="text"
                id="fname"
                placeholder="First name"
              ></input>
              <br></br>
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
              ></input>
              <br></br>
              <select name="role" id="role">
                <option value="role">Role</option>
              </select>
              <input
                type="text"
                id="address"
                placeholder="Address"
              ></input>
              <br></br>
              <input
                type="text"
                id="zip"
                placeholder="Zip"
              ></input>
              <br></br>
              <input
                type="text"
                id="employeeID"
                placeholder="Employee ID"
              ></input>
              <br></br>
              <input
                type="text"
                id="employeeID"
                placeholder="Employee ID"
              ></input>
              <br></br>
              <div className="dateOfBirth">
                <select name="month" id="month">
                  <option value="month">Birth month</option>
                </select>
                <select name="day" id="day">
                  <option value="day">Day</option>
                </select>
                <select name="year" id="year">
                  <option value="year">Year</option>
                </select>
              </div>
              <button type="button" id="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
