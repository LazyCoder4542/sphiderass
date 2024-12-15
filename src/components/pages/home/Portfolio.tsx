import { Link } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
function Portfolio() {
  return (
    <section id={styles.portfolio}>
      <header>
        <h2>Portfolio</h2>
        <p>
          Take a look at our portfolio to see how each project reflects our
          commitment to driving innovation, user engagement, and business
          growth.
        </p>
      </header>
      <div>
        <nav>
          <Splide
            options={{
              arrows: false,
              pagination: false,
              drag: true,
              gap: "1.5rem",
              mediaQuery: "min",
              autoWidth: true,
              // breakpoints: {
              //   640: {
              //     destroy: true,
              //   },
              // },
            }}
          >
            <SplideSlide>
              <span className={styles.selected}>All</span>
            </SplideSlide>
            <SplideSlide>
              <span>Websites</span>
            </SplideSlide>
            <SplideSlide>
              <span>Mobile apps</span>
            </SplideSlide>
            <SplideSlide>
              <span>Social media Branding</span>
            </SplideSlide>
            <SplideSlide>
              <span>Graphic Design</span>
            </SplideSlide>
            <SplideSlide>
              <span>SEO</span>
            </SplideSlide>
          </Splide>
        </nav>
        <div className={styles.samples}>
          <Splide
          hasTrack={false}
            options={{
              arrows: false,
              pagination: false,
              drag: true,
              mediaQuery: "min",
              breakpoints: {
                640: {
                  destroy: true,
                },
              },
            }}
          >
            <SplideTrack>
              <SplideSlide>
                <div className={styles.sample}>
                  <img src="images/illustrations/illus5.png" alt="" />
                  <div>
                    <span>Homeworx</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="106"
                        height="8"
                        fill="none"
                        viewBox="0 0 106 8"
                      >
                        <path
                          id="Line 7"
                          fill="currentColor"
                          d="M105.355 4.096a.51.51 0 0 0-.011-.722L102.052.176a.51.51 0 0 0-.711.732l2.927 2.843-2.843 2.926a.51.51 0 1 0 .732.71zM.007 5.772 104.996 4.25l-.014-1.02L-.008 4.752z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.sample}>
                  <img src="images/illustrations/illus5.png" alt="" />
                  <div>
                    <span>Homeworx</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="106"
                        height="8"
                        fill="none"
                        viewBox="0 0 106 8"
                      >
                        <path
                          id="Line 7"
                          fill="currentColor"
                          d="M105.355 4.096a.51.51 0 0 0-.011-.722L102.052.176a.51.51 0 0 0-.711.732l2.927 2.843-2.843 2.926a.51.51 0 1 0 .732.71zM.007 5.772 104.996 4.25l-.014-1.02L-.008 4.752z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.sample}>
                  <img src="images/illustrations/illus5.png" alt="" />
                  <div>
                    <span>Homeworx</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="106"
                        height="8"
                        fill="none"
                        viewBox="0 0 106 8"
                      >
                        <path
                          id="Line 7"
                          fill="currentColor"
                          d="M105.355 4.096a.51.51 0 0 0-.011-.722L102.052.176a.51.51 0 0 0-.711.732l2.927 2.843-2.843 2.926a.51.51 0 1 0 .732.71zM.007 5.772 104.996 4.25l-.014-1.02L-.008 4.752z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
        <Link to="/portfolio">
          <div className={`see_more btn`}>
            <span>View my projects</span>
            <span>
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame">
                  <g id="Group">
                    <path
                      id="Vector"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.37331 5.27734L17.0962 13.0003L9.37331 20.7232L7.90039 19.2503L14.1504 13.0003L7.90039 6.75026L9.37331 5.27734Z"
                      fill="#FCFCFC"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
