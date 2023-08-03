import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = (props) => {
  const [deps, setDeps] = useState({});
  const [detailsModalShow, setDetailsModalShow] = useState(false);

  const showDetailsModal = (data) => {
    setDeps(data);
    setDetailsModalShow(true);
  };

  const closeDetailsModal = () => setDetailsModalShow(false);

  const { resumeProjects, resumeBasicInfo } = props;

  let projects = null;
  if (resumeProjects && resumeBasicInfo) {
    const sectionName = resumeBasicInfo.section_name.projects;
    projects = resumeProjects.map((projects) => (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={projects.title}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={() => showDetailsModal(projects)}>
            <div>
              <img
                src={projects.images[0]}
                alt="projectImages"
                height="230"
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
              />
              <span className="project-date">{projects.startDate}</span>
              <br />
              <p className="project-title-settings mt-3">
                {projects.title}
              </p>
            </div>
          </div>
        </span>
      </div>
    ));
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{resumeBasicInfo?.section_name.projects}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShow}
          onHide={closeDetailsModal}
          data={deps}
        />
      </div>
    </section>
  );
};

export default Projects;
