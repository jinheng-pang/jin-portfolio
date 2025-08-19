import type { ExperienceProps } from "../../types";
import MedHealth from "./experienceItems/medhealth";
import Monash from "./experienceItems/monash";
import ExperienceCard from "./experienceCards/ExperienceCard";

import "./experience.css";

const experiences: ExperienceProps[] = [MedHealth, Monash];

const Experience = () => {
  return (
    <div className="experience panel">
      <h2 className="heading">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <li className="timelineItem" key={idx}>
            <time className="timelineDuration">
              {" "}
              <span className="start">{exp.start} -</span>
              <span className="end">{exp.end}</span>
            </time>
            <div className="timelineMiddle">
              <div className="timelinePoint"></div>
            </div>
            <div className="timelineContent">
              <ExperienceCard {...exp} />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Experience;
