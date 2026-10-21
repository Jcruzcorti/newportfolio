import React from "react";
import Opening from "../../assets/apertura.svg";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Js from "../../assets/js.svg";
import Reactjs from "../../assets/react.png";
import Clousing from "../../assets/clausura.svg";

// Technologies images data
const technologiesImages = [
  {
    id: 0,
    image: Opening,
    alt: "imgapertura",
  },
  {
    id: 1,
    image: Html,
  },
  {
    id: 2,
    image: Css,
    alt: "imgcss",
  },
  {
    id: 3,
    image: Js,
    alt: "imgjs",
  },
  {
    id: 4,
    image: Reactjs,
    alt: "imgreact",
  },
  {
    id: 5,
    image: Clousing,
    alt: "imgclausura",
  },
];

// Knowledges data
const knowledgessPrimary = ["HTML - CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Material UI", "Tailwind"];
const knowledgessSecondary = ["Node.js", "NestJS", "MongoDB", "Capacitor", "Auth0 / Stripe", "Firebase / GCP", "Github"];

function CvSecondary() {
  return (
    <>
      <div className="DivCvSecondary">
        <h2 className="CvTitle">KNOWLEDGES</h2>
        {/* Technologies images */}
        <div className="DivKnowledge">
          {technologiesImages.map((technology) => (
            <img src={technology.image} alt={technology.alt} className="ImgKnowledges" key={technology.id} />
          ))}

          {/* Knowledges */}
          <div className="DivSub">
            <div className="DivSub1">
              {knowledgessPrimary.map((knowledge) => (
                <h4 className="h4" key={knowledge}>
                  {knowledge}
                </h4>
              ))}
            </div>
            <div className="DivSub2">
              {knowledgessSecondary.map((knowledge) => (
                <h4 className="h4" key={knowledge}>
                  {knowledge}
                </h4>
              ))}
            </div>
          </div>
        </div>
        {/* Languages */}
        <h2 className="CvTitle">LANGUAGES</h2>
        <div className="DivLenguages">
          <h4 className="h4">Spanish: Native</h4>
          <h4 className="h4">English: Professional working</h4>
        </div>
      </div>
    </>
  );
}

export default CvSecondary;
