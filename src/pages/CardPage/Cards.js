import React, { useState } from "react";
import "./cards.css";
import DegreeApplication from "../DegreeAplication/DegreeApplication";
import Migration from "../Migration/Migration";
import Applicants from "../ApplicantsInputForm/Applicants";

function Cards() {
  return (
    <>
      <div id="wrapper wrapper1">
        <div
          id="content-wrapper content-wrapper-pages"
          class="d-flex flex-column"
          style={{ overflowX: "visible" }}
        >
          <div id="content " className="content-cards">
            <div class="container-fluid container-fluid-cards">
              <DegreeApplication />
              <Applicants />
              <Migration />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
