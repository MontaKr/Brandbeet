import React, { useEffect, useRef } from "react";
import { Wrap } from "./Part7Style";
import { gsap } from "gsap/all";

function Part7() {
  let Part7Ref = useRef(null);
  let DemoRef = useRef(null);
  let OurWorkRef = useRef(null);
  let OurTextRef = useRef(null);
  let OurRef = useRef(null);
  let OurWork = useRef(null);
  let ScrollRef = useRef(null);

  useEffect(() => {
    let ctx7 = gsap.context(() => {
      let tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: Part7Ref,
          start: "50% 50%",
          end: "300% 50%",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      tl7
        .to(DemoRef, { bottom: "7%" })
        .to(OurTextRef, { height: "60vh" }, "height")
        .to(OurWorkRef, { height: "60vh" }, "height")
        .to(OurRef, { left: "0%" }, "height")
        .to(OurWork, { right: "0%" }, "height")
        .to(ScrollRef, { marginTop: "-300%" });
    });

    return () => ctx7.revert();
  }, []);

  return (
    <Wrap ref={(el) => (Part7Ref = el)}>
      <div className="our-work-txt" ref={(el) => (OurWorkRef = el)}>
        <h1 ref={(el) => (OurRef = el)}>Our</h1>
        <h1 ref={(el) => (OurWork = el)}>Work</h1>
      </div>
      <div className="our-work-txt-div" ref={(el) => (OurTextRef = el)}>
        <div className="scroll-work">
          <div className="scroll-img" ref={(el) => (ScrollRef = el)}>
            <img src="../../asset/img/1.jpg" alt="imageone" />
            <img src="../../asset/img/2.jpg" alt="imagetwo" />
            <img src="../../asset/img/10.jpg" alt="imageten" />
            <img src="../../asset/img/11.jpg" alt="imageeleven" />
            <img src="../../asset/img/12.jpg" alt="imagetwelve" />
            <img src="../../asset/img/13.jpg" alt="imagethirteen" />
            <img src="../../asset/img/14.jpg" alt="imagefourteen" />
          </div>
        </div>
      </div>
      <button id="demo" ref={(el) => (DemoRef = el)}>
        Book a demo
      </button>
    </Wrap>
  );
}

export default Part7;
