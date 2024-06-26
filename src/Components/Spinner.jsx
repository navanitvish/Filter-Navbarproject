import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <br />
      <p className=" text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Spinner;
