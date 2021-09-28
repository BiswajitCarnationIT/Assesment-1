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

  const handleFormChange = (e) => {
    if (currentForm === "form1") {
      setCurrentForm("form2");
    } else {
      setCurrentForm("from1");
    }
  };

  const handleSubmit = (e) => {
      alert("submitted");
  };

  const handelChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
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
                      errors = {errors}
                      handelChange={handelChange}
                      handleSubmit={handleSubmit}
                    />
                  )}

                  {currentForm === "form2" && (
                    <FormTwo
                      fields={fields}
                      errors = {errors}
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
