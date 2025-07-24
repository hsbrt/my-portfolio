import { Link } from "react-router-dom";
import { navRoutes, blogRoutes } from "../Routes/AllRoutes";
export default function NavBar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md py-3">
        <Link
          to="/om"
          className="navbar-brand text-decoration-none text-dark"
          onClick={() => hideNavBarOnMdScreens()}
        >
          {/* <a className="navbar-brand" href="/om"> */}
          <i className="bi bi-house-fill fs-2"></i>
          {/* </a> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navRoutes.map((route) => (
              <li
                className="md-nav-item ms-auto"
                key={route.index}
                onClick={() => hideNavBarOnMdScreens()}
              >
                <Link
                  to={route.path}
                  className="nav-link text-decoration-none text-dark"
                >
                  {route.routeName}
                </Link>
              </li>
            ))}
            <li className="nav-item dropdown ms-auto">
              <a
                className="nav-link dropdown-toggle d-flex justify-content-end align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                tabIndex={-1}
              >
                My Blog
              </a>
              <ul className="dropdown-menu">
                {blogRoutes.map((blog) => (
                  <li
                    key={blog.index}
                    onClick={() => hideNavBarOnMdScreens()}
                    className="my-1"
                  >
                    <Link
                      to={blog.path}
                      className="dropdown-item text-decoration-none text-dark"
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
