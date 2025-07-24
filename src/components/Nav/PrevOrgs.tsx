import workExperience from "../../resources/workExperience.json";

export function PrevOrgs() {
  return (
    <>
      <h3 className="d-lg-none mt-2 mb-3 text-center">
        <span className="p-2 badge text-bg-secondary">Experience</span>
      </h3>
      <div
        id="carouselIndicators"
        className="carousel slide border rounded-3 shadow pb-0"
        data-bs-touch="true"
      >
        <div className="carousel-indicators bg-body-secondary">
          {workExperience.workExperiences.map((experience, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to={index}
              className={experience.presentlyWorkingHere ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {workExperience.workExperiences.map((experience, index) => (
            <div
              className={`carousel-item ${
                experience.presentlyWorkingHere ? "active" : ""
              }`}
              key={index}
            >
              <div className="modal-dialog p-0">
                <div className="modal-content rounded-4 shadow py-4 p-md-5">
                  <div className="modal-header d-block">
                    {experience.presentlyWorkingHere && (
                      <div className="badge text-bg-primary mx-2 my-2">
                        Currently working as
                      </div>
                    )}
                    <h1 className="fw-bold mb-0 fs-3 mx-2 my-1">
                      {experience.roleName}
                    </h1>
                  </div>
                  <div className="modal-body p-1">
                    <h3 className="fs-5 fw-light my-2 mx-1 mb-3">
                      {experience.companyName} - {experience.duration}
                    </h3>
                    {experience.primarySkills.length && (
                      <button
                        className="btn btn-primary w-100"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Primary Skills
                      </button>
                    )}
                    <div className="show" id="collapseExample">
                      <div className="card card-body px-1 px-md-3">
                        {experience.primarySkills.length &&
                          experience.primarySkills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                          ))}
                      </div>
                    </div>
                    {experience.projects && (
                      <h5 className="fs-5 fw-bold my-3 mx-1">Projects</h5>
                    )}
                    {experience.projects &&
                      experience.projects.map((project, index) => (
                        <div className="border rounded-3 my-3" key={index}>
                          <button
                            className="btn btn-primary w-100"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            {project.projectName}
                          </button>
                          <div className="show" id="collapseExample">
                            <div className="card card-body pb-5 px-1 px-md-3">
                              <p>{project.projectDescription}</p>
                              {project.techStack && (
                                <p className="fw-bold">Tech Stack</p>
                              )}
                              <ul>
                                {project.techStack &&
                                  project.techStack.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export function PrevOrgsMenu() {
  return (
    <>
      <p>This is the my previous organizations menu.</p>
    </>
  );
}

export function PrevOrgsSubMenu() {
  return (
    <>
      <p>This is the my previous organizations sub menu.</p>
    </>
  );
}
