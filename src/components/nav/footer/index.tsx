import { Link } from "react-router-dom";
import { useTheme } from "../../../context/theme";
import styles from "./style.module.css";

function Footer() {
  const { mode } = useTheme();
  return (
    <footer id={styles["site-footer"]}>
      <div className={styles.main}>
        <div>
          <img width="200px" src={`/images/logo_${mode}.svg`} alt="" />
          <p>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div>
            <ThemeToggler />
          </div>
        </div>
        <div className={styles.links}>
          <div>
            <span>QUICK LINKS</span>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/jobs#openings">Career</Link>
              </li>
            </ul>
          </div>
          <div>
            <span>INFORMATION</span>
            <ul>
              <li>FAQ</li>
              <li>Branding</li>
              <li>Illustration</li>
              <li>Design Concept</li>
              <li>App Design</li>
            </ul>
          </div>
          <div>
            <span>PRODUCT</span>
            <ul>
              <li>Figma</li>
              <li>Adobe</li>
              <li>Dribbble</li>
              <li>Behance</li>
              <li>Themeforest</li>
            </ul>
          </div>
        </div>
        <div className={styles.socials}>
          <Link
            to="https://www.facebook.com/share/Qw3P2XNMph7rz8NV/?mibextid=LQQJ4d"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <div>
              <span>
                <img src="/icons/social/facebook.svg" alt="facebook" />
              </span>
              <span>Facebook</span>
            </div>
          </Link>
          <Link
            to="https://www.linkedin.com/company/sphiderass-web-ltd"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <div>
              <span>
                <img src="/icons/social/linkedin.svg" alt="linkedin" />
              </span>
              <span>Linkedin</span>
            </div>
          </Link>
          <Link
            to="https://x.com/Sphiderassweb"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <div>
              <span>
                <img src="/icons/social/twitter.svg" alt="twitter" />
              </span>
              <span>Twitter</span>
            </div>
          </Link>
          <Link
            to="https://www.instagram.com/sphiderassweb/?igsh=NXcyczJzeHNlcnk2"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <div>
              <span>
                <img src="/icons/social/instagram.svg" alt="instagram" />
              </span>
              <span>Instagram</span>
            </div>
          </Link>
        </div>
      </div>
      <span>© 2024 - Sphiderassweb.Ltd</span>
    </footer>
  );
}

export default Footer;

function ThemeToggler() {
  const { mode, toggleMode } = useTheme();
  return (
    <div className={styles.toggle} data-val={mode == "dark" ? 1 : 0}>
      <span className={mode == "light" ? styles.active : undefined}>
        Light Mode
      </span>
      <div
        onClick={() => {
          toggleMode(mode == "dark" ? "light" : "dark");
        }}
      >
        <div>
          <span className={styles.ball}></span>
        </div>
      </div>
      <span className={mode == "dark" ? styles.active : undefined}>
        Dark Mode
      </span>
    </div>
  );
}
