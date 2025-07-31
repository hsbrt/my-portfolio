import personData from "../../resources/personData.json";

export function AboutMe() {
  return (
    <>
      <div className="mx-auto text-center vh-100 rounded-3">
        <h3 className="d-lg-none">
          <span className="badge badge-bg my-xs-2 my-sm-2">About Me</span>
        </h3>
        <img
          src="src\resources\bharat2.jpg"
          alt="my-image"
          className="img-fluid w-50 h-auto rounded-3 mx-auto my-lg-4 about-me-image"
        />
        <hr></hr>
        <p className="px-1 about-me-text">{personData.aboutMe}</p>
      </div>
    </>
  );
}

export function AboutMeMenu() {
  return <>{/* <p>This is the about me menu.</p> */}</>;
}

export function AboutMeSubMenu() {
  return <>{/* <p>This is the about me sub menu.</p> */}</>;
}
