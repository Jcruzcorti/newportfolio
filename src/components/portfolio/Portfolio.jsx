import React from "react";
import "./portfolio.css";
import PortfolioProyects from "../portfolio/PortfolioProyects";
import { proyects } from "../../mock/proyects.ts";
import NavBar from "../navbar/NavBar";

function Portfolio() {
  return (
    <>
      <NavBar />
      <div className="DivProyectos">
        <PortfolioProyects proyects={proyects} />
      </div>
    </>
  );
}

export default Portfolio;
