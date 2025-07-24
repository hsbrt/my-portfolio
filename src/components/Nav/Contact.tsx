import contacts from "../../resources/contacts.json";
export function Contact() {
  return (
    <>
      <h3 className="d-lg-none mt-2 mb-3 text-center">
        <span className="p-2 badge text-bg-secondary">Contact Me</span>
      </h3>
      <div className="card mx-2">
        <div className="card-body">
          <h5 className="card-title my-3 fw-bold">Contact Information</h5>
          <p className="card-text my-3 fw-light">
            I prefer communication on email, please expect reply with a day.
            Please do not spam the inbox. For more updates please follow me on
            LinkedIn
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex align-items-center">
            <span className="bi bi-envelope-check fs-1 mx-3"></span>
            <a
              className="fs-3"
              href={"mailto:" + contacts.emailId}
              target="_blank"
            >
              Send Email
            </a>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <span className="bi bi-telephone-outbound fs-1 mx-3"></span>
            <a className="fs-3" href={"tel:" + contacts.mobile} target="_blank">
              Call Me
            </a>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <span className="bi bi-linkedin mx-3 fs-1 mx-3"></span>
            <a
              href={contacts.linkedin}
              className="card-link fs-3"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export function ContactMenu() {
  return (
    <>
      <p>This is the contact me section.</p>
    </>
  );
}

export function ContactSubMenu() {
  return (
    <>
      <p>This is the contact me submenu section.</p>
    </>
  );
}
