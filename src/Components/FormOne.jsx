import React from "react";
import MonthPicker from "./MonthPicker";
import PrivacyText from "./PrivacyText";
import "./Style.css";

const FormOne = ({ state, handelChange, handelSubmit }) => {
  return (
    <div>
      <h3>Ente your existing Care.com login information</h3>

      <input
        type="text"
        id="emailid"
        name="emailid"
        placeholder="Email"
        value={state.fields.emailid}
        onChange={handelChange}
      ></input>
      <br></br>
      <div className="errorMsg">{state.errors.emailid}</div>

      <input
        type="text"
        id="password"
        name="password"
        placeholder="Password"
        value={state.fields.password}
        onChange={handelChange}
      ></input>
      <div className="errorMsg">{state.errors.password}</div>

      <h3>Complete These fields to activate your benefit</h3>
      <input
        type="text"
        id="employeeID"
        name="employeeID"
        placeholder="Employee ID"
        value={state.fields.employeeID}
        onChange={handelChange}
      ></input>
      <div className="errorMsg">{state.errors.employeeID}</div>

      <select name="role" id="role" value={state.role} onChange={handelChange}>
        <option value="ReactJS">ReactJS</option>
        <option value="NodeJS">NodeJS</option>
        <option value="AWS">AWS</option>
      </select>
      <div className="errorMsg">{state.errors.role}</div>
      <div className="dateOfBirth">
        <select name="month" id="month">
          <option value="">Birth month</option>

          <MonthPicker />
        </select>
        <select name="day" id="day">
          <option value="day">Day</option>
          <option value="1">1</option>
        </select>
        <select name="year" id="year">
          <option value="year">Year</option>
          <option value="1990">1990</option>
        </select>
      </div>

      {/* <button type="button" id="submit" onClick={() => handelSubmit()}>
        Submit
      </button> */}
      
      <div className="PrivacyText">
        <p>
          By chosing "Submit," you agree to our{" "}
          <p id="PrivacyText">Terms of Use</p> and{" "}
          <p id="PrivacyText">Privacy Policy</p>
        </p>
      </div>
      <div className="PrivacyText2">
        <p>
          By creating an account you are opting to receive emails from </p>
          <p>Care.com. If you do not wish to receive emails,you may <p id="PrivacyText">opt out</p>
        </p>
      </div>
      <button type="button" id="submit" onClick={() => handelSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default FormOne;
