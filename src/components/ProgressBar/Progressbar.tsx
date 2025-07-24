import { useState, useEffect } from "react";

export default function Progressbar() {
  const [progress, setprogress] = useState(0);
  const [isProgressBarVisible, setProgressBar] = useState(true);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setprogress((progress) => Math.min(progress + 1, 100));
        setProgressBar(true);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setProgressBar(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (isProgressBarVisible) {
    return (
      <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
        <div
          className="progress col-6"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar fw-bold"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    );
  }
  return null;
}
