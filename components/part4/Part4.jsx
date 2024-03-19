import React, { useEffect, useRef } from "react";
import { Wrap } from "./Part4Style";
import { gsap } from "gsap/all";

function Part4() {
  const textArray = [
    {
      h1: "Lorem ipsum dolor sit amet.",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint rem officiis natus id culpa, voluptatibus cupiditate quidem adipisci dolore incidunt!",
    },
    {
      h1: "Lorem ipsum dolor sit amet.",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint rem officiis natus id culpa, voluptatibus cupiditate quidem adipisci dolore incidunt!",
    },
    {
      h1: "Lorem ipsum dolor sit amet.",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint rem officiis natus id culpa, voluptatibus cupiditate quidem adipisci dolore incidunt!",
    },
  ];

  let Part4Ref = useRef(null);
  let cirRef = useRef(null);
  let contentRefs = useRef([]);

  useEffect(() => {
    let ctx4 = gsap.context(() => {
      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: Part4Ref,
          start: "50% 50%",
          end: "200% 50%",
          pin: true,
          scrub: true,
          // markers: true,
        },
      });

      tl4
        .to(
          contentRefs.current[0],
          { marginTop: "-25%", opacity: "1" },
          "sct-1"
        )
        .to(contentRefs.current[1], { opacity: "1" }, "sct-2")
        .to(
          contentRefs.current[0],
          { marginTop: "-100", opacity: "0" },
          "sct-2"
        )
        .to(contentRefs.current[2], { opacity: "1" }, "sct-3")
        .to(contentRefs.current[1], { opacity: "0" }, "sct-3")
        .to(contentRefs.current[0], { marginTop: "-180%" }, "sct-3")
        .to(contentRefs.current[0], { marginTop: "-230%" }, "sct-4")
        .to(contentRefs.current[2], { opacity: "0" }, "sct-4")
        .to(cirRef, { marginLeft: "100%" }, "sct-4")
        .fromTo(
          cirRef,
          { rotate: 0 },
          { rotate: 720, duration: tl4.duration(), ease: "none" },
          "sct-1"
        );
    });

    return () => ctx4.revert();
  }, []);

  return (
    <Wrap ref={(el) => (Part4Ref = el)}>
      <div className="lft-part-4">
        <h1>Monta</h1>
        <div className="cir-part-4" ref={(el) => (cirRef = el)}>
          <img
            src="https://assets-global.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg"
            alt="star"
          />
        </div>
      </div>
      <div className="rght-part-4">
        {textArray.map((val, idx) => {
          return (
            <div
              className="content-rght-part-4"
              key={idx}
              ref={(el) => (contentRefs.current[idx] = el)}
            >
              <h1>{val.h1}</h1>
              <p>{val.p}</p>
            </div>
          );
        })}
      </div>
    </Wrap>
  );
}

export default Part4;
