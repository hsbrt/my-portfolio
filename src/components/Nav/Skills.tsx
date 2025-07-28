import personData from "../../resources/personData.json";
const pSkills = personData.primarySkills;
export function Skills() {
  return (
    <>
      <h3 className="d-lg-none mt-2 mb-3 text-center">
        <span className="p-2 badge badge-bg">My Skills</span>
      </h3>
      {pSkills.map((skillObj, index) => (
        <div className="card mb-4 p-xs-0 skill-div-animation" key={index}>
          <div className="card-body">
            <h5 className="card-title p-2 skill-caption-bg">
              {skillObj.skillType}
            </h5>
            <hr></hr>
            {skillObj.skills.map((skillNameObj, skillIdx) => (
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
                key={skillIdx}
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed rounded-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${skillIdx}-${skillNameObj.name}`}
                      aria-expanded="true"
                      aria-controls={`flush-collapse-${skillIdx}-${skillNameObj.name}`}
                    >
                      {skillNameObj.name}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse-${skillIdx}-${skillNameObj.name}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body ">
                      <ul className="list-group">
                        {skillNameObj.frameworks.map((framework, fwIdx) => (
                          <li
                            className="list-group-item p-md-2 p-sm-1 p-1"
                            key={fwIdx}
                          >
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {}
    </>
  );
}

export function SkillsMenu() {
  return (
    <>
      <p>This is the my skills menu.</p>
    </>
  );
}

export function SkillsSubMenu() {
  return (
    <>
      <p>This is the my skills sub menu.</p>
    </>
  );
}
