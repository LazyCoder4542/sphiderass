import { NavLink, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";
import { useTheme } from "../../../context/theme";
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const {mode} = useTheme();
  const navigate = useNavigate()
  return (
    <>
      <header id={styles["site-header"]}>
        <div className={styles.logo}>
          <img src={`/images/logo_${mode}.svg`} alt="" />
        </div>
        <nav
          data-open={navOpen}
          tabIndex={0}
          onBlur={() => {
            setTimeout(() => {
              setNavOpen(false);
            }, 200)
          }}
        >
          <div
            className={styles.button}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <div hidden={navOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="32"
                height="32"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <g transform="translate(-1088 -192)">
                  <path id="Icons" fill="none" d="M0 0h1280v800H0z"></path>
                  <g id="Icons1">
                    <g id="hamburger-2">
                      <path
                        fillRule="nonzero"
                        d="M1095.971 235.925h16.031v5.992h-16.03zM1096.18 221.004h31.822v5.992h-31.821zM1096.18 206.082h47.822v5.992h-47.821z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div hidden={!navOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 1024 1024"
                fill="currentColor"

              >
                <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496"></path>
              </svg>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? styles.pending
                      : isActive
                      ? styles.active
                      : "";
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? styles.pending
                      : isActive
                      ? styles.active
                      : "";
                  }}
                >
                  About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <g id="vuesax/linear/arrow-down">
                      <g id="arrow-down">
                        <path
                          id="Vector"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="1.5"
                          d="m17.1 7.959-5.433 5.433a1.655 1.655 0 0 1-2.334 0L3.9 7.96"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? styles.pending
                      : isActive
                      ? styles.active
                      : "";
                  }}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <g id="vuesax/linear/arrow-down">
                      <g id="arrow-down">
                        <path
                          id="Vector"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="1.5"
                          d="m17.1 7.959-5.433 5.433a1.655 1.655 0 0 1-2.334 0L3.9 7.96"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? styles.pending
                      : isActive
                      ? styles.active
                      : "";
                  }}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive, isPending }) => {
                    return isPending
                      ? styles.pending
                      : isActive
                      ? styles.active
                      : "";
                  }}
                >
                  Career
                </NavLink>
              </li>
            </ul>
            <div>
              <div>
                <img src="/icons/search.svg" alt="search" />
              </div>
              <div className="btn btn-primary"
              onClick={() => {
                navigate("/jobs")
              }}>
                Work with us
                <span>
                  <img src="/icons/arrow.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
