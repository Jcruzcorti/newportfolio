import React from "react";
import "./aboutme.css";
import mate from "../../assets/mate.png";
import NavBar from "../navbar/NavBar";

const interests = [
  {
    id: 0,
    icon: mate,
    title: "Playing sports (training, soccer, paddle, tennis)",
  },
  {
    id: 1,
    icon: mate,
    title: "Enjoying time with family and friends",
  },
  {
    id: 2,
    icon: mate,
    title: "Watching soccer/series/movies, playing video games",
  },
];

function AboutMe() {
  return (
    <>
      <NavBar />
      <div className="DivAboutMe">
        {/* Presentation */}
        <div className="DivAboutMePresentation">
          <h2>PRESENTATION</h2>
          <h4 className="h4">
            {" "}
            I was born on March 14, 1996 in Córdoba, Argentina. After working in other fields, I moved into software development in 2022. Since March 2024 I've been working
            remotely as a Full Stack Developer for a US company, with a stronger interest in UI, layout, and styling, while also contributing to backend, payments, and native
            iOS/Android apps. I keep training and shipping production features to grow my technical skills.
          </h4>
        </div>
        {/* Interests */}
        <div className="DivInterests">
          <div className="DivInterestsItems">
            <h2>INTERESTS</h2>

            {interests.map((interest) => (
              <h4 className="h4" key={interest.id}>
                <img src={interest.icon} alt={interest.title} className="imgMate" />
                {interest.title}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
