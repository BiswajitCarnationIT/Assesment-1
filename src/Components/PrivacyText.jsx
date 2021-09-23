import React from "react";
import "./Style.css";

const PrivacyText = () => {
  return (
    <>
      <div className="PrivacyText">
        <p>
          By chosing "Submit," you agree to our{" "}
          <p id="PrivacyText">Terms of Use</p> and{" "}
          <p id="PrivacyText">Privacy Policy</p>
        </p>
      </div>
      {/* <div className="PrivacyText">
        <p>
          By creating an account you are opting to receive emails from Care.com.
          If you do not wish to receive emails,you may <p id="PrivacyText">opt out</p>
        </p>
      </div> */}
    </>
  );
};

export default PrivacyText;
