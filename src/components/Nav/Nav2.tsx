import { Link } from "react-router-dom";
import { navRoutes, blogRoutes } from "../Routes/AllRoutes";
export default function NavBar2() {
  return (
    <div className="border my-3">
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
        <ul className="nav nav-pills collapse navbar-collapse">
          <li className="nav-item">
            <Link to="/om" className="nav-link">
              <i className="bi bi-house-fill fs-2"></i>
            </Link>
          </li>

          {navRoutes.map((route, index) => (
            <li className="nav-item mt-2" key={index}>
              <Link className="nav-link" aria-current="page" to={route.path}>
                {route.routeName}
              </Link>
            </li>
          ))}
          <li className="nav-item dropdown mt-2">
            <a
              className="nav-link dropdown-toggle disabled"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              My Blogs
            </a>
            <ul className="dropdown-menu">
              {blogRoutes.map((blog, index) => (
                <li key={index}>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to={blog.path}
                  >
                    {blog.routeName}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
