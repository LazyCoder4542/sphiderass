import Page from "../../components/layouts/page";
import styles from "./style.module.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Team() {
  return (
    <Page pageStyle={styles.page}>
      <section id={styles.executives}>
        <header>
          <h2>
            Board of <span>Directors</span>
          </h2>
        </header>
        <div>
          <div className={styles.card}>
            <div>
              <img src="images/profile/p1.jpeg" alt="" />
            </div>
            <div>
              <h5>John Doe</h5>
              <span>Founder & CEO</span>
              <span>
                John Doe, Co founded Sphiderass in 2021. Lorem Ipsum Dolor sit
                amet default Text etc.
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img src="images/profile/p2.jpeg" alt="" />
            </div>
            <div>
              <h5>John Doe</h5>
              <span>Chief Operating Officer</span>
              <span>
                John Doe, Co founded Sphiderass in 2021. Lorem Ipsum Dolor sit
                amet default Text etc.
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img src="images/profile/p3.jpeg" alt="" />
            </div>
            <div>
              <h5>John Doe</h5>
              <span>Human Resource Manager</span>
              <span>
                John Doe, Co founded Sphiderass in 2021. Lorem Ipsum Dolor sit
                amet default Text etc.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.team}>
        <header>
          <h2>
            Meet Our <span>Amazing</span> Team
          </h2>
        </header>
        <div>
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              // arrows: false,
              pagination: false,
              drag: true,
              gap: "1.5rem",
              mediaQuery: "max",
              perPage: 3,
              // perMove: 3,
              // autoWidth: true,
              autoplay: true,
              interval: "5000",
              breakpoints: {
                700: {
                  perPage: 2,
                },
                450: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideTrack>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p1.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Founder & CEO</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p2.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Chief Operating Officer</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p3.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Human Resource Manager</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p1.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Founder & CEO</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p2.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Chief Operating Officer</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p3.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Human Resource Manager</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p1.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Founder & CEO</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p2.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Chief Operating Officer</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p3.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Human Resource Manager</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p1.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Founder & CEO</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p2.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Chief Operating Officer</span>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className={styles.card}>
                  <div>
                    <img src="images/profile/p3.jpeg" alt="" />
                  </div>
                  <div>
                    <h5>John Doe</h5>
                    <span>Human Resource Manager</span>
                  </div>
                </div>
              </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows" />
          </Splide>
        </div>
      </section>
    </Page>
  );
}

export default Team;
