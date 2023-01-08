import React from "react";

const SingleUser = ({ user }) => {
  return (
    <div className="column">
      <div className="card is-flex is-justify-content-center is-flex-direction-column">
        <div className="card-image">
          <figure className="image is-4by4">
            <img src={user.picture.large} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">
              {user.name.first} {user.name.last}
            </p>
            <p className="subtitle is-6">E-mail: {user.email}</p>
            <p className="subtitle is-6">Phone: {user.cell}</p>
            <div className="card-footer">
              <div className="card-footer-item">
                <p className="subtitle is-6">
                  {user.location.country} | {user.location.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
