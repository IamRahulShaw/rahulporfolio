import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="outerErrorContainer">
      <div className="container errorContainer">
        <div className="row errorRow">
          <div className="col errorCol">
            <h1 id="notFound">404! Page Not Found</h1>
            <h2 className="homeLink">
              Go back to <NavLink to="/">Home</NavLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Error);
