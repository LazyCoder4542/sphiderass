import { useTheme } from "../../../context/theme";
import styles from "./style.module.css";
function Footer() {
  const {mode} = useTheme()
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
              <li>About</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Career</li>
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
          <div>
            <span>
              <img src="/icons/social/facebook.svg" alt="facebook" />
            </span>
            <span>Facebook</span>
          </div>
          <div>
            <span>
              <img src="/icons/social/linkedin.svg" alt="linkedin" />
            </span>
            <span>Linkedin</span>
          </div>
          <div>
            <span>
              <img src="/icons/social/twitter.svg" alt="twitter" />
            </span>
            <span>Twitter</span>
          </div>
          <div>
            <span>
              <img src="/icons/social/instagram.svg" alt="instagram" />
            </span>
            <span>Instagram</span>
          </div>
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
      <span className={mode == "light" ? styles.active : undefined}>Light Mode</span>
      <div
        onClick={() => {
          toggleMode(mode == "dark" ? "light" : "dark");
        }}
      >
        <div>
          <span className={styles.ball}></span>
        </div>
      </div>
      <span className={mode == "dark" ? styles.active : undefined}>Dark Mode</span>
    </div>
  );
}
