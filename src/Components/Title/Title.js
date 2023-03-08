import React from "react";

import "./Title.css";

// #region COMPONENT
/**
* A component that displays a Title
* @class
* @category Title
*/
function Title() {
  // Interface
  return (
    <div>
      <div className="Title-Container">
        <h1 className="Title-Text">My movies</h1> 
      </div>

    </div>
  );
}

export { Title };
