import React from "react";
import UsingHooks from "../UsingHook";

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <h3>Join our Team of Writers</h3>
        <div className="cash">
          <p>On dasdas, writers earn a living doing what they love.</p>
          <p className="p2">
            Getting started is easy. Just pay a one time <span>$25 fee </span>
            and everything is ready to go.
          </p>
        </div>

        <UsingHooks />
      </div>
    </footer>
  );
};

export default footer;
