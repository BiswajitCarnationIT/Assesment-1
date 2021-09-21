import React from "react";

const FormOne = ({state,handelChange}) => {

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
      <input type="text" id="employeeID" placeholder="Employee ID"></input>
      <br></br>
      <select name="role" id="role">
        <option value="role">Role</option>
      </select>
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
  );
};

export default FormOne;
