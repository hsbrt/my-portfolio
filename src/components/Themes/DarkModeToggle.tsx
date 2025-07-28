import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className="btn-group-vertical"
      role="group"
      aria-label="Vertical button group"
    >
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="true"
        >
          {darkMode ? (
            <i className="bi bi-moon-stars-fill"></i>
          ) : (
            <i className="bi bi-brightness-high"></i>
          )}
        </button>
        <ul className="dropdown-menu">
          <li onClick={() => setDarkMode(false)}>
            <a className="dropdown-item" href="#">
              <div className="bi bi-brightness-high">
                <span className="d-inline mx-2">Light</span>
              </div>
            </a>
          </li>
          <li onClick={() => setDarkMode(true)}>
            <a className="dropdown-item" href="#">
              <div className="bi bi-moon-stars-fill">
                <span className="d-inline mx-2">Dark</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
