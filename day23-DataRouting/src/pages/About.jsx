import React from "react";
import { useParams } from "react-router";

const About = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>About-{id} </h1>
    </div>
  );
};

export default About;
