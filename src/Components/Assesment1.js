import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Style.css";
import logo from "./logo.png";
import footerLogo from "./footer_logo.png";
import SignUp from "./SignUp";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";

class Assesment1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
      formInvalid: true,
      currentForm: "form1",
    };
    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    this.setState({
      fields,
    });
    this.validateForm();
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    if (!fields["employeeID"]) {
      formIsValid = false;
      errors["employeeID"] = "*Please enter your employeeID.";
    }

    if (typeof fields["employeeID"] !== "undefined") {
      if (!fields["employeeID"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["employeeID"] = "*Please enter valid employeeID.";
      }
    }

    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "*Please enter your first name.";
    }

    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fname"] = "*Please enter valid first name";
      }
    }

    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "*Please enter your last name.";
    }

    if (typeof fields["lname"] !== "undefined") {
      if (!fields["lname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lname"] = "*Please enter valid last name";
      }
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "*Please enter your zip code";
    }

    if (typeof fields["zip"] !== "undefined") {
      if (!fields["zip"].match(/^[1-9]{1}[0-9]{5}$/)) {
        formIsValid = false;
        errors["zip"] = "*Please enter valid 6 digit zip code";
      }
    }

    if (!fields["role"]) {
      formIsValid = false;
      errors["role"] = "*Please select your role";
    }

    if (formIsValid) {
      errors["password"] = "";
      errors["username"] = "";
      this.setState({
        ...this.state,
        formInvalid: false,
        errors: errors,
      });
    }
    //console.log( errors)
    else {
      this.setState({
        ...this.state,
        errors: errors,
      });
    }
    return formIsValid;
  }

  handleFormChange() {
    if (this.state.currentForm === "form1") {
      this.setState({
        ...this.state,
        currentForm: "form2",
      });
    } else {
      this.setState({
        ...this.state,
        currentForm: "form1",
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
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
                  <botton
                    type="botton"
                    className="botton1"
                    onClick={() => this.handleFormChange()}
                  >
                    Yes
                  </botton>
                  <botton
                    type="botton"
                    className="botton1"
                    onClick={() => this.handleFormChange()}
                  >
                    No
                  </botton>
                </div>

                <>
                  {this.state.currentForm === "form1" && (
                    <FormOne
                      state={this.state}
                      handelChange={this.handelChange}
                    />
                  )}

                  {this.state.currentForm === "form2" && (
                    <FormTwo
                      state={this.state}
                      handelChange={this.handelChange}
                    />
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div>
            <div className="footerlogo">
              <img src={footerLogo} alt="logo of care.com" />
            </div>
            <hr className="line"></hr>
            <div className="temp">
              <div className="footerDiv1">
                <h3>About us</h3>
                <h3>For Business</h3>
              </div>
              <div className="footerDiv1">
                <h3>About us</h3>
                <h3>For Business</h3>
              </div>
            </div>
            <div className="temp">
              <p>
                Care.com is the world's largest online destination for care. We
                connect families with great caregivers and caring companies to
                help you be there for the ones you love .
              </p>
            </div>
            <div className="temp">
              <p>
                Care.com does not employ , recommend or endorse any care
                provider or care seeker nor is it responsible for the conduct of
                any care provider or care seeker Care.com provides information
                and tools to help care seekers and care providers connect and
                make informed decisions . However , each individual is solely
                responsible for selecting an appropriate care provider or care
                seeker for themselves or their families and for complying with
                all applicable laws in connection with any employment
                relationship they establish . Care.com does not provide medical
                advice , diagnosis or treatment or engage in any conduct that
                requires a professional license .
              </p>
            </div>
            <div className="temp">
              <p>
                Care.com and " There for you are service marks or registered
                service marks of Care.com , Inc.
              </p>
            </div>
            <div className="temp">
              <p>
              © 2007-2015 Care.com , Inc. All rights reserved .
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Assesment1;
