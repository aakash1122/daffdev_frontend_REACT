import React from "react";

export default function DevFeed() {
  return (
    <div className="container row  mx-auto p-2">
      <div className="col-md-6 col-lg-4 mb-3">
        <div className="card" style={{ width: 17 + "rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
