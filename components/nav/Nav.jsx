import React from "react";
import { Wrap } from "./NavStyle";

function Nav() {
  return (
    <Wrap>
      <div className="lft-nav">
        <h1 id="logo">Monta</h1>
        <h1>Monta</h1>
      </div>
      <div className="rght-nav">
        <h2 id="nav-contact">contact@Monta.com</h2>
        <h2>contact@Monta.com</h2>
      </div>
    </Wrap>
  );
}

export default Nav;
