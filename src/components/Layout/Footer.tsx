import ThemeToggle from "../Themes/DarkModeToggle";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="d-flex border justify-content-evenly bg-dark-subtle align-items-center">
          <div className=" d-flex justify-content-evenly py-2">
            <a
              href="https://github.com/yourusername/your-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github fs-1"></i>
            </a>
          </div>
          <div className="d-flex">&copy; 2025 My Profile</div>
          <div className="d-flex justify-content-evenly">
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </>
  );
}
