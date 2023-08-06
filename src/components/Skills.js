import React, { useEffect, useState } from "react";

const Skills = (props) => {
  const [sectionName, setSectionName] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (props.sharedSkills && props.resumeBasicInfo) {
      setSectionName(props.resumeBasicInfo.section_name.skills);
      setSkills(
        props.sharedSkills.icons.map((skill, i) => (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skill.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skill.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        ))
      );
    }
  }, [props.sharedSkills, props.resumeBasicInfo]);

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
