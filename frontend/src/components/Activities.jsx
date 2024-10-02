import { Heading } from "@chakra-ui/react";
import React from "react";
import timeline from "../assets/timeline.png"; // Correct path to the image


function Activities() {
  return (
    <div className="activities mt-3 p-2">
      <Heading className="activities-compaign">Campaign Name</Heading>
      <Heading className="activities-days">
        8 Steps | 9 Days in Sequence
      </Heading>
      <div className="mt-4">
        <img src={timeline} class="img-fluid" alt="..." />
      </div>
    </div>
  );
}

export default Activities;
