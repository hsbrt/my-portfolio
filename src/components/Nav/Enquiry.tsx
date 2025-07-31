export function Enquiry() {
  return (
    <>
      <h3 className="d-lg-none mt-2 mb-3 text-center">
        <span className="p-2 badge badge-bg">Submit Enquiry</span>
      </h3>
      <div className="border rounded-4 p-3 mx-2 enquiry-email">
        <form action="https://formspree.io/f/xvgqkoed" method="POST">
          <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control"
              name="email"
              id="InputEmail1"
              aria-describedby="emailHelp"
              onChange={handleInputChange}
            ></input>
            <div id="emailHelp" className="form-text">
              Don't Worry, I'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputtext" className="form-label">
              Your Message
            </label>
            <textarea
              required
              name="message"
              className="form-control"
              id="exampleInputtext"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="button"
            id="checkmeBtn"
            className="btn mt-1 bg-grey border d-flex my-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            disabled={true}
          >
            Check me out
          </button>
          <button
            type="submit"
            id="submitBtn"
            className="btn btn-primary d-flex my-3"
            disabled={true}
          >
            Submit
          </button>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Terms and Conditions
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Hello World</p>
                  <p>Blah</p>
                  <p>Blah</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => agreeToConditions("no")}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={() => agreeToConditions("yes")}
                  >
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Bootstrap</strong>
            <small>now</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Thanks for understanding the Terms and Conditions
            <i className="bi bi-emoji-smile"></i>
          </div>
        </div>
      </div>
    </>
  );
}

function agreeToConditions(answer = "") {
  const submitBtn = document.getElementById("submitBtn") as HTMLInputElement;
  const liveToast = document.getElementById("liveToast") as HTMLElement;
  if (answer === "yes") {
    submitBtn.disabled = false;
    liveToast.classList.add("show");
  } else {
    submitBtn.disabled = true;
  }
  return;
}

function handleInputChange() {
  // event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const checkmeBtn = document.getElementById("checkmeBtn") as HTMLButtonElement;
  const emailInput = document.getElementById("InputEmail1") as HTMLInputElement;
  const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
  const textInput = document.getElementById(
    "exampleInputtext"
  ) as HTMLTextAreaElement;
  if (
    emailInput &&
    emailInput.checkValidity() &&
    textInput &&
    textInput.checkValidity()
  ) {
    checkmeBtn.disabled = false;
    submitBtn.disabled = true;
  } else {
    checkmeBtn.disabled = true;
    submitBtn.disabled = true;
  }
}

export function EnquiryMenu() {
  return <>{/* <p>This is the enquiry menu section.</p> */}</>;
}

export function EnquirySubMenu() {
  return <>{/* <p>This is the enquiry sub menu section.</p> */}</>;
}
