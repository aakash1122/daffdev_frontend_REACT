import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="div container d-flex flex-column">
        <div className="profile-container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
                className="w-100 h-100 user-image p-3"
              />
            </div>
            <div className="col-md-8 profile-info d-flex flex-column justify-content-center">
              <h2>Anwar Aakash</h2>
              <span>Skills :</span>
              <h3>Javascript, React, MongoDB, Express</h3>
              <span>About : </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ipsa error, iste expedita magnam incidunt minima officia? A
                saepe, inventore exercitationem consequatur ratione debitis
                temporibus neque enim beatae ut laudantium, id laborum sed
                praesentium veniam impedit repellendus dicta non placeat
                voluptates consectetur repellat ipsam quia. Voluptates impedite
              </p>
            </div>
          </div>
        </div>
        <div className="social-links mx-auto mt-2 p-2">
          <span class="fa-stack fa-2x m-2">
            <i class="fas fa-circle fa-stack-2x" />
            <i class="fab fa-instagram fa-stack-1x fa-inverse" />
          </span>
          <span class="fa-stack fa-2x m-2">
            <i class="fas fa-circle fa-stack-2x" />
            <i class="fab fa-facebook-f fa-stack-1x fa-inverse" />
          </span>
          <span class="fa-stack fa-2x m-2">
            <i class="fas fa-circle fa-stack-2x" />
            <i class="fab fa-linkedin fa-stack-1x fa-inverse" />
          </span>
        </div>
      </div>
    </div>
  );
}
