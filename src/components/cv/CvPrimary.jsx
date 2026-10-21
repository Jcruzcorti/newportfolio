import React from "react";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";

// Experience data
const experience = [
  {
    id: 0,
    tittle: "Full Stack Developer — RotoGPT (Reefinery, Inc.). Remote (US). Mar 2024 – Present",
  },

  {
    id: 1,
    tittle: "Front-end Developer — Freelance. Córdoba, Argentina. May 2022 – Feb 2024",
  },
];

// Academic Background data
const academicBackground = [
  {
    id: 0,
    tittle: "Bachelor's degree oriented in economics and management of organizations in the Institute Juan Zorrilla de San Martín 2008-2013",
    description: "Bachelor's degree oriented in economics and management of organizations in the Institute Juan Zorrilla de San Martín 2008-2013",
  },
  {
    id: 1,
    tittle: "Bachelor's Degree in Psychology at the Faculty of Psychology UNC. 2015 - Present",
  },
  {
    id: 2,
    tittle: "Web development course at Coderhouse",
  },
  {
    id: 3,
    tittle: "Javascript course at Coderhouse",
  },
  {
    id: 4,
    tittle: "React js course at Coderhouse",
  },
  {
    id: 5,
    tittle: "React.js Intermediate & Advanced at OpenBootcamp · 2023",
  },
  {
    id: 6,
    tittle: "Problem-solving, good communication skills, adaptability, organization/orderly",
  },
  {
    id: 7,
    tittle: "Effort, constancy, positivity",
  },
  {
    id: 8,
    tittle: "Proactivity, self-taught, empathy, autonomy",
  },
];

// Aptitudes data
const aptitudes = [
  {
    id: 0,
    tittle: "Problem-solving, good communication skills, adaptability, organization/orderly",
  },
  {
    id: 1,
    tittle: "Effort, constancy, positivity",
  },
  {
    id: 2,
    tittle: "Proactivity, self-taught, empathy, autonomy",
  },
];

function CvPrimary() {
  return (
    <>
      {/* Experience */}
      <div className="DivCvPrimary">
        <h2 className="CvTitle">EXPERIENCE</h2>
        <div className="DivEducation">
          {experience.map((experience) => (
            <h4 className="h4" key={experience.id}>
              <ArrowDropDownSharpIcon />
              {experience.tittle}
            </h4>
          ))}
        </div>
        {/* Academic Background */}
        <h2 className="CvTitle">ACADEMIC BACKGROUND</h2>
        <div className="DivEducation">
          {academicBackground.map((academicBackground) => (
            <h4 className="h4" key={academicBackground.id}>
              <ArrowDropDownSharpIcon />
              {academicBackground.tittle}
            </h4>
          ))}
        </div>
        {/* Skills */}
        <h2 className="CvTitle">SKILLS</h2>
        <div className="DivSkills">
          {aptitudes.map((aptitude) => (
            <h4 className="h4" key={aptitude.id}>
              <ArrowDropDownSharpIcon />
              {aptitude.tittle}
            </h4>
          ))}
        </div>
      </div>
    </>
  );
}

export default CvPrimary;
