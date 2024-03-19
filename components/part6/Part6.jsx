import React, { useEffect, useRef } from "react";
import { Wrap } from "./Part6Style";
import { gsap } from "gsap/all";

function Part6() {
  let Part6Ref = useRef(null);
  let Content6Ref = useRef(null);

  useEffect(() => {
    let ctx6 = gsap.context(() => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: Part6Ref,
          start: "0% 70%",
          end: "15% 50%",
          scrub: 1,
          // markers: true,
        },
      });

      tl6.to(Content6Ref, { height: "0%" });
    });

    return () => ctx6.revert();
  }, []);

  return (
    <Wrap ref={(el) => (Part6Ref = el)}>
      <div className="rounded-div-wrapper-6" ref={(el) => (Content6Ref = el)}>
        <div className="rounded-div-6" />
      </div>
      {Array.from({ length: 3 }).map((idx) => {
        return (
          <div className="brand-part-6" key={idx}>
            <div className="top-brand-part-6">
              <div className="lft-top-6">
                <h1>Brand</h1>
              </div>
              <div className="rght-top-6">
                <button>View Pricing</button>
              </div>
            </div>
            <div className="btm-brand-part-6">
              <div className="lft-btm-6" />
              <div className="rght-btm-6">
                <h2>1-2 months average / 8 design sprints</h2>
                <div className="content-rght-btm-6">
                  <p>
                    Logo design <br />
                    Visual Identity <br />
                    Collateral <br />
                    Brand Guidelines <br />
                    Animation <br />
                    Naming
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Wrap>
  );
}

export default Part6;
