import React from "react";
import { Wrap } from "./Part3Style";

function Part3() {
  return (
    <Wrap>
      <div className="top-part-3">
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <div className="cta">
          <div className="cta-book">
            <div className="cta-text">
              <h2>Book a demo</h2>
              <h2>Book a demo</h2>
            </div>
          </div>
          <div className="cta-book cta-book-2">
            <div className="cta-text">
              <h2>View Pricing</h2>
              <h2>View Pricing</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="btm-part-3">
        <img src="../../asset/img/APPLE.svg" alt="Apple" />
        <img src="../../asset/img/DELL.svg" alt="DELL" />
        <img src="../../asset/img/HP.svg" alt="HP" />
        <img src="../../asset/img/IBM.svg" alt="IBM" />
        <img src="../../asset/img/ORALB.svg" alt="ORALB" />
      </div>
    </Wrap>
  );
}

export default Part3;
