import React from "react";

function LoadDetails() {
  return (
    <div className="load-details-content mt-3 p-2">
      <div className="d-flex">
        <div className="load-details-label">Name</div>
        <div className="load-details-label-data ">Orlando</div>
      </div>
      <br />
      <div className="d-flex">
        <div className="load-details-label">Contact No</div>
        <div className="load-details-label-data ">+54-9062827869</div>
      </div>
      <br />
      <div className="d-flex">
        <div className="load-details-label">Email ID</div>
        <div className="load-details-label-data ">orlando@gmail.com</div>
      </div>
      <br />
      <div className="d-flex">
        <div className="load-details-label">LinkedIn</div>
        <div className="load-details-label-data">linkedin.com/in/timvadde/</div>
      </div>
      <br />
      <div className="d-flex">
        <div className="load-details-label">Company Name</div>
        <div className="load-details-label-data">Reachinbox</div>
      </div>
    </div>
  );
}

export default LoadDetails;
