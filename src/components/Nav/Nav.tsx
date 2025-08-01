import { Link, useLocation } from "react-router-dom";
import { navRoutes, blogRoutes } from "../Routes/AllRoutes";

export default function NavBar() {
  const location = useLocation();
  return (
    <div
      className="container-fluid bg-dark-subtle"
      style={{
        background: "linear-gradient(135deg, #8d9abfff 0%, #272c8bff 100%)",
      }}
    >
      <nav className="navbar navbar-expand-md py-3">
        <Link
          to="/my-portfolio/om"
          className="navbar-brand text-decoration-none text-dark"
          onClick={() => hideNavBarOnMdScreens()}
        >
          <span
            className={`bi bi-house fw-bold fs-3 px-2 text-white${
              location.pathname === "/om" ? " bg-primary" : ""
            } ${
              localStorage.getItem("darkMode") === "true"
                ? "text-white"
                : "text-dark"
            }`}
          ></span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
          color="white"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navRoutes.map((route, index) => (
              <div className="ms-auto mx-lg-3" key={index}>
                <li
                  className="nav-item"
                  key={index}
                  onClick={() => hideNavBarOnMdScreens()}
                >
                  <Link to={route.path} className="nav-link active">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <div
                          className={`nav-link fs-6 text-white ${
                            location.pathname === route.path
                              ? " active text-white"
                              : ""
                          }`}
                          aria-current="page"
                        >
                          {route.routeName}
                        </div>
                      </li>
                    </ul>
                  </Link>
                </li>
              </div>
            ))}
            <li className="nav-item dropdown ms-auto">
              <div
                className="nav-link dropdown-toggle d-flex justify-content-end align-items-center disabled"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                tabIndex={-1}
              >
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a
                      className={`nav-link text-white${
                        location.pathname.includes("/blog")
                          ? " active text-white"
                          : ""
                      }`}
                      aria-current="page"
                      href="#"
                    >
                      My Blog
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="dropdown-menu">
                {blogRoutes.map((blog, bi) => (
                  <li
                    key={bi}
                    onClick={() => hideNavBarOnMdScreens()}
                    className="my-1"
                  >
                    <Link
                      key={bi}
                      to={blog.path}
                      className={`dropdown-item nav-link ${
                        location.pathname === blog.path
                          ? " active text-white"
                          : ""
                      }`}
                    >
                      {blog.routeName}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function hideNavBarOnMdScreens() {
  const navbarCollapse = document.getElementById(
    "navbarSupportedContent"
  ) as HTMLElement;
  navbarCollapse.classList.remove("show");
}
