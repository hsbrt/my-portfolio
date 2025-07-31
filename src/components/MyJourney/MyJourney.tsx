import React, { useEffect, useState, useRef } from "react";
const milestones = [
  {
    year: 2010,
    title: "Graduated from VTU",
    description:
      "Honestly, I was not that great in my academics, but I managed to graduate with a degree in Electronics and Communication Engineering.",
    icon: "👨‍🎓",
  },
  {
    year: 2011,
    title: "First Job",
    description:
      "As industry was recovering from recession, I had to take an entry into Telecommunication to begin with, as a technician.",
    icon: "✨",
  },
  {
    year: 2012,
    title: "Migration",
    description:
      "I had to migrate to a different place in Karnataka for my job, which was a big change for me.",
    icon: "🚇",
  },
  {
    year: 2013,
    title: "Second Job",
    description:
      "Started working in Bharti Airtel, which was a step up in my career.",
    icon: "🗼",
    isMileStone: true,
  },
  {
    year: 2015,
    title: "Promotion",
    description:
      "Promoted to a SME role, which set hopes for my future in the same company",
    icon: "🏆",
  },
  {
    year: 2016,
    title: "Significant Delivery",
    description:
      "Significant deliveries in area of OPEX save, transport media diversity, and operator interconnectivity",
    icon: "🔮",
  },
  {
    year: 2017,
    title: "Job Change - new Era",
    description:
      "Transitioned to a new role in AT&T that focused on innovative solutions and strategic initiatives.",
    icon: "🗼",
    isMileStone: true,
  },
  {
    year: 2018,
    title: "When I said Hello World!",
    description:
      "Embraced self in Software Development, and started my journey in Python.",
    icon: "🖥️",
  },
  {
    year: 2021,
    title: "New Role",
    description:
      "Promoted and started in to new Software Developer Role in AT&T in a different team",
    icon: "🥇",
  },
  {
    year: 2025,
    title: "Award",
    description:
      "More accolades as I made my application and hosted on K8S cluster and made it available to the organization",
    icon: "🏆",
    isMileStone: true,
  },
  {
    year: 2025,
    title: "Journey Continues...",
    description: "Hope this failing, learning and winning never stops!",
    icon: "🌟",
  },
];
export default function MyJourney2() {
  const [count, setCount] = useState(0);
  const parentDivRef = useRef<HTMLDivElement>(null);
  const innerDivHeight = 32; // 2rem = 32px (default browser font size)

  // Update count on mount and on window resize
  useEffect(() => {
    function updateCount() {
      if (parentDivRef.current) {
        const parentHeight = parentDivRef.current.offsetHeight;
        setCount(Math.floor(parentHeight / (innerDivHeight + 45))); // 40px is approx margin (my-5)
      }
    }
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div className="d-flex flex-column">
      <h3 className="d-lg-none mx-auto">
        <span className="badge badge-bg my-xs-2 my-sm-2">My Journey</span>
      </h3>
      <div className=" d-flex">
        <div
          className="p-0 m-0 bg-secondary d-flex justify-content-center align-items-top w-50 w-md-25"
          id="my-journey-container"
          ref={parentDivRef}
        >
          <div className="mx-auto d-none d-sm-flex flex-column">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className="bg-white d-flex flex-column  my-5 mt-0"
                style={{
                  height: "2rem",
                  width: "0.2rem",
                }}
              ></div>
            ))}
          </div>
          <div className="motorcycle-moving img-fluid">
            <img src="src\assets\biker6.png" className="img-fluid" alt="" />
          </div>
          <div className="mx-auto d-none d-sm-flex flex-column">
            <div className="mb-5"></div>
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className="bg-white d-flex flex-column mx-auto my-5 mt-0"
                style={{ height: "2rem", width: "0.2rem" }}
              ></div>
            ))}
          </div>
        </div>
        <div
          className="journey-bg border align-items-start align-self-between"
          ref={parentDivRef}
        >
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="d-flex flex-row align-items-center my-5 py-5 mx-auto"
            >
              {milestone.isMileStone ? (
                <img
                  src="src\assets\milestone1.png"
                  alt=""
                  className="image-fluid my-5 py-5 mx-sm-1"
                ></img>
              ) : (
                <i className="fs-1 text-white bi bi-signpost-2-fill my-5 py-5 mx-sm-1"></i>
              )}
              <div className="border badge-bg rounded-4 border-white me-2 pe-2 flex-column align-items-end">
                <h5 className="ms-2">{milestone.year}</h5>
                <h3 className="ms-2">{milestone.title}</h3>
                <p className="ms-2">{milestone.icon}</p>
                <p className="text-whites ms-2">{milestone.description}</p>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center align-items-center">
            <img src="src/assets/race.png" alt="" className="w-25 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
