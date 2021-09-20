import React, { Component } from "react";
import PropTypes from "prop-types";
import  "./Style.css";
import logo from "./logo.png";

class Assesment1 extends Component {
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
          <div className="row">
            <div className="column">
              <div className="enrollContainer">
                <h1>Enroll</h1>
                <h3>The right care could be right around the corner</h3>
              </div>
            </div>
            <div className="column">
              <div className="AreYouNew">Are you new to Care.com</div>
            </div>
          </div>
          {/* <div class="row">
  <div class="column" style={{backgroundColor : '#aaa'}}>
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style={{backgroundColor : '#bbbb'}}>
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div> */}
        </div>
        hi
      </div>
    );
  }
}

export default Assesment1;
