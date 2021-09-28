import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Style.css";
import logo from "./logo.png";
import footerLogo from "./footer_logo.png";
import FormOne from "./FormOneHook";
import FormTwo from "./FormTwoHook";

function AssessmentOneHook() {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [currentForm, setCurrentForm] = useState("form1");

  console.log(fields);
  console.log(errors);
  console.log(currentForm);

  const handleFormChange = (e) => {
    if (currentForm === "form1") {
      setCurrentForm("form2");
    } else {
      setCurrentForm("from1");
    }
  };

  const handleSubmit = (e) => {
    if (currentForm === "form1") {
      validateFormOne();
    }
    alert("submitted");
  };

  const handelChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const validateFormOne = () => {
    let error = { ...errors };
    let formIsValid = true;
    if (!fields["emailid"]) {
      formIsValid = false;
      error["emailid"] = "*Please enter your email-ID.";
      setErrors(error);
    }
    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        error["emailid"] = "*Please enter valid email-ID.";
        setErrors(error);
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      error["password"] = "*Please enter your password.";
      setErrors(error);
    }
    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        error["password"] = "*Please enter secure and strong password.";
        setErrors(error);
      }
    }
    if (!fields["employeeID"]) {
      formIsValid = false;
      error["employeeID"] = "*Please enter your employeeID.";
      setErrors(error);
    }

    if (typeof fields["employeeID"] !== "undefined") {
      if (!fields["employeeID"].match(/^[0-9a-zA-Z ]*$/)) {
        formIsValid = false;
        error["employeeID"] = "*Please enter valid employeeID.";
        setErrors(error);
      }
    }
    if (!fields["role"]) {
      formIsValid = false;
      error["role"] = "*Please select your role";
      setErrors(error);
    }
    if (!fields["month"]) {
      formIsValid = false;
      error["month"] = " *enter month";
      setErrors(error);
    } else {
      if (fields["month"] < 1 || fields["month"] > 12) {
        formIsValid = false;
        error["month"] = " *month:1-12";
        setErrors(error);
      }

      if (!fields["day"]) {
        formIsValid = false;
        error["day"] = " *enter day";
        setErrors(error);
      } else if (fields["month"] === "2") {
        if (fields["day"] < 1 || fields["day"] > 28) {
          formIsValid = false;
          error["day"] = " * day:1-28";
          setErrors(error);
        }
      } else if (
        fields["month"] === "4" ||
        fields["month"] === "6" ||
        fields["month"] === "9" ||
        fields["month"] === "11"
      ) {
        if (fields["day"] < 1 || fields["day"] > 30) {
          formIsValid = false;
          error["day"] = " * day:1-30";
          setErrors(error);
        } else {
          formIsValid = false;
          error["day"] = " * day:1-31";
          setErrors(error);
        }
      }
    }
    if (!fields["year"]) {
      formIsValid = false;
      error["year"] = " *enter year.";
      setErrors(error);
    } else {
      if (fields["year"] < 1980 || fields["year"] > 2021) {
        formIsValid = false;
        error["year"] = " *enter valid year.";
        setErrors(error);
      }
    }
  };

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
            <form>
              <div className="AreYouNew">
                <h3>Are you new to Care.com?</h3>
                <div className="bottonPrent">
                  <button
                    type="button"
                    className={`button1 ${currentForm === "form2" && "active"}`}
                    onClick={() => handleFormChange()}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`button1 ${currentForm === "form1" && "active"}`}
                    onClick={() => handleFormChange()}
                  >
                    No
                  </button>
                </div>

                <>
                  {currentForm === "form1" && (
                    <FormOne
                      fields={fields}
                      errors={errors}
                      handelChange={handelChange}
                      handleSubmit={handleSubmit}
                    />
                  )}

                  {currentForm === "form2" && (
                    <FormTwo
                      fields={fields}
                      errors={errors}
                      handelChange={handelChange}
                      handleSubmit={handleSubmit}
                    />
                  )}
                </>
              </div>
            </form>
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
              Care.com does not employ , recommend or endorse any care provider
              or care seeker nor is it responsible for the conduct of any care
              provider or care seeker Care.com provides information and tools to
              help care seekers and care providers connect and make informed
              decisions . However , each individual is solely responsible for
              selecting an appropriate care provider or care seeker for
              themselves or their families and for complying with all applicable
              laws in connection with any employment relationship they establish
              . Care.com does not provide medical advice , diagnosis or
              treatment or engage in any conduct that requires a professional
              license .
            </p>
          </div>
          <div className="temp">
            <p>
              Care.com and " There for you are service marks or registered
              service marks of Care.com , Inc.
            </p>
          </div>
          <div className="temp">
            <p>© 2007-2015 Care.com , Inc. All rights reserved .</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AssessmentOneHook;
