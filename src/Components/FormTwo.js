import React from "react";

const FormTwo = ({ state, handelChange,handelSubmit }) => {
  ///

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
      
      {/* <button type="button" id="submit">
        Submit
      </button> */}
      <button
        type="button"
        id="submit"
        onClick={() => handelSubmit()}
      >
        Submit
      </button>
    </div>
  );
};

export default FormTwo;
