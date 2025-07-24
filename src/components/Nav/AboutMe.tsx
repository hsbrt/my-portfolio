import personData from "../../resources/personData.json";

export function AboutMe() {
  return (
    <>
      <div className="mx-auto text-center overflow-auto">
        <h3 className="d-lg-none mt-2 mb-3">
          <span className="p-2 badge text-bg-secondary">About Me</span>
        </h3>
        <img
          src="src\resources\bharat2.jpg"
          alt="my-image"
          className="img-fluid w-50 h-auto img-thumbnail rounded mx-auto d-block"
        />
        <hr></hr>
        <p className="px-1">{personData.aboutMe}</p>
      </div>
    </>
  );
}

export function AboutMeMenu() {
  return (
    <>
      <p>This is the about me menu.</p>
    </>
  );
}

export function AboutMeSubMenu() {
  return (
    <>
      <p>This is the about me sub menu.</p>
    </>
  );
}
