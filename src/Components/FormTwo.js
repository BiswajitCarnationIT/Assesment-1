import React from "react";
import "./Style.css";

const FormTwo = ({ state, handelChange, handelSubmit }) => {
  return (
    <div>
      <h3>Complete These fields to activate your benefit</h3>
      <input
        type="text"
        id="employeeID"
        name="employeeID"
        placeholder="Employee ID"
        value={state.employeeID}
        onChange={handelChange}
      ></input>
      <div className="errorMsg">{state.errors.employeeID}</div>

      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="First name"
        value={state.fname}
        onChange={handelChange}
      ></input>
      <div className="errorMsg">{state.errors.fname}</div>

      <input
        type="text"
        id="lname"
        name="lname"
        placeholder="Last Name"
        value={state.lname}
        onChange={handelChange}
      ></input>
      <div className="errorMsg">{state.errors.lname}</div>

      <select name="role" id="role" value={state.role} onChange={handelChange}>
        <option value="ReactJS">ReactJS</option>
        <option value="NodeJS">NodeJS</option>
        <option value="AWS">AWS</option>
      </select>
      <div className="errorMsg">{state.errors.role}</div>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Address"
        value={state.lname}
        onChange={handelChange}
      ></input>
      <div className="errorMsg">{state.errors.address}</div>
      <input
        type="text"
        id="zip"
        name="zip"
        placeholder="Zip"
        value={state.zip}
        onChange={handelChange}
      ></input>
      <div className="errorMsg">{state.errors.zip}</div>

      <input
        type="text"
        id="emailid"
        name="emailid"
        placeholder="Email"
        value={state.emailid}
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
      <div className="dateOfBirth">
        <input
          type="number"
          id="month"
          name="month"
          placeholder="Month"
          min="1"
          max="12"
          value={state.fields.month}
          onChange={handelChange}
        />
        <input
          type="number"
          id="day"
          name="day"
          placeholder="Day"
          min="1"
          max="32"
          value={state.fields.day}
          onChange={handelChange}
        />
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Year"
          min="1970"
          max="2021"
          value={state.fields.year}
          onChange={handelChange}
        />
      </div>
      <div className="errorMsg">
        {state.errors.day}
        {state.errors.month}
        {state.errors.year}
      </div>
      <div className="PrivacyText">
        <p>
          By chosing "Submit," you agree to our{" "}
          <p id="PrivacyText">Terms of Use</p> and{" "}
          <p id="PrivacyText">Privacy Policy</p>
        </p>
      </div>
      <div className="PrivacyText2">
        <p>By creating an account you are opting to receive emails from </p>
        <p>
          Care.com. If you do not wish to receive emails,you may{" "}
          <p id="PrivacyText">opt out</p>
        </p>
      </div>
      <button type="button" id="submit" onClick={() => handelSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default FormTwo;
