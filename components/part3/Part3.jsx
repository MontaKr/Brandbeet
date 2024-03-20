import React from "react";
import { Wrap } from "./Part3Style";
import APPLE from "../../public/APPLE.svg";
import DELL from "../../public/DELL.svg";
import HP from "../../public/HP.svg";
import IBM from "../../public/IBM.svg";
import ORALB from "../../public/ORALB.svg";

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
        <img src={APPLE} alt="Apple" />
        <img src={DELL} alt="DELL" />
        <img src={HP} alt="HP" />
        <img src={IBM} alt="IBM" />
        <img src={ORALB} alt="ORALB" />
      </div>
    </Wrap>
  );
}

export default Part3;
