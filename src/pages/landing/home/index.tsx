import { useNavigate } from "react-router-dom";
import {
  AWSIcon,
  FigmaIcon,
  IBMIcon,
  MetaIcon,
  NextIcon,
  SendGridIcon,
  VueIcon,
} from "../../../assets/icon";
import Page from "../../../components/layouts/page";
import Testimonials from "../../../components/pages/home/Testimonials";
import { useTheme } from "../../../context/theme";
import styles from "./style.module.css";
import ContactForm from "@/components/atom/ContactForm";
import Portfolio from "@/components/pages/home/Portfolio";
import Blogs from "@/components/pages/home/Blogs";
const Home = () => {
  const { mode } = useTheme();
  const navigate = useNavigate();
  return (
    <Page pageStyle={styles.page}>
      <section id={styles.hero}>
        <header>
          <h1>
            Transform your ideas into Digital <span>Experiences</span>
          </h1>
          <p>
            at Sphiderass we are dedicated to helping businesses thrive in the
            ever evolving digital spaces
          </p>
          <div className={`${styles.btn} btn btn-primary`}>
            Explore our Services
          </div>
        </header>
        <div className={styles.tech}>
          <span>
            <FigmaIcon />
          </span>
          <span>
            <NextIcon />
          </span>
          <span>
            <VueIcon />
          </span>
          <span>
            <AWSIcon />
          </span>
          <span>
            <IBMIcon />
          </span>
          <span>
            <SendGridIcon />
          </span>
          <span>
            <MetaIcon />
          </span>
          <span>
            <img src="icons/tech/the_assisials.png"></img>
          </span>
        </div>
      </section>
      <section id={styles.about}>
        <header>
          <h1>About Us</h1>
        </header>
        <div>
          <div>
            <h2>We Help To Get Solutions</h2>
            <p>
              At Sphiderass, we blend creativity and technology to deliver
              exceptional results. Our approach includes understanding your
              goals to create impactful solutions that drive user engagement and
              business success.
            </p>
            <div className={`${styles.btn} btn btn-secondary`}>Read more</div>
          </div>
          <div>
            <img src="images/illustrations/illus1.png"></img>
            <div>
              <div>
                <p>
                  Our team consists of skilled professionals who bring a wealth
                  of experience to everything we do.
                </p>
                <div className={`${styles.btn} btn btn-primary`}>
                  Meet the team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.services}>
        <header>
          <h2>Here's what's possible with Sphiderass</h2>
        </header>
        <div>
          <div className={styles.service_cards}>
            <div>
              <h3>UI/ UX Design</h3>
              <div>
                <div className={styles.card}>
                  <div className={styles.pic}>
                    <img src="images/illustrations/illus2.jpeg" alt="" />
                  </div>
                  <div className={styles.btn}>
                    <img
                      src={`icons/arr_top_left${
                        mode == "dark" ? "_dark" : ""
                      }.svg`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Web Development</h3>
              <div>
                <div className={styles.card}>
                  <div className={styles.pic}>
                    <img src="images/illustrations/illus3.jpeg" alt="" />
                  </div>
                  <div className={styles.btn}>
                    <img
                      src={`icons/arr_top_left${
                        mode == "dark" ? "_dark" : ""
                      }.svg`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Mobile Development</h3>
              <div>
                <div className={styles.card}>
                  <div className={styles.pic}>
                    <img src="images/illustrations/illus4.jpeg" alt="" />
                  </div>
                  <div className={styles.btn}>
                    <img
                      src={`icons/arr_top_left${
                        mode == "dark" ? "_dark" : ""
                      }.svg`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`see_more btn`}
            onClick={() => {
              navigate("/services");
            }}
          >
            <span>See More</span>
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
        </div>
      </section>
      <Portfolio />
      <Testimonials />
      <section id={styles.learn}>
        <header>
          <h2>Learn with Sphiderass</h2>
        </header>
        <div>
          <div className={styles.tile}>
            <div>
              <span>Innovative</span>
              <h3>UI & UX Design</h3>
              <p>
                Learn to create websites that captivate and engage. With UI/UX
                design, you’ll build digital experiences that are not only
                visually appealing but also smooth and intuitive to use. Ready
                to turn your creative vision into real, functional websites?
              </p>
              <div className={`${styles.btn} btn btn-secondary`}>
                click here
              </div>
            </div>
            <div>
              <img src="images/illustrations/illus6.jpeg" />
            </div>
          </div>
          <div className={styles.tile}>
            <div>
              <span>Innovative</span>
              <h3>Front End Development</h3>
              <p>
                Discover the art of building stunning, interactive websites as a
                front-end developer! You'll create the visual elements that
                users see and interact with, turning designs into dynamic
                experiences. Curious to learn more?
              </p>
              <div className={`${styles.btn} btn btn-secondary`}>
                click here
              </div>
            </div>
            <div>
              <img src="images/illustrations/illus7.jpeg" />
            </div>
          </div>
        </div>
      </section>
      <Blogs />
      <section id={styles.contact}>
        <div>
          <div>
            <h3>Request A Quote</h3>
            <ContactForm />
          </div>
        </div>
        <header>
          <h2>Lets transform that idea into a digital experience</h2>
          <p>
            Bootstrap code with a well-organized Figma file to design & develop
            your next websites in minutes.
          </p>
          <div>
            <div className="btn">
              Let's Work Together
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="12"
                  fill="none"
                  viewBox="0 0 15 12"
                >
                  <path
                    stroke="#1E1E1E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.333"
                    d="M8.833 1.334 13.5 6.001m0 0-4.667 4.666M13.5 6.001h-12"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="btn btn-primary">Our Services</div>
          </div>
        </header>
      </section>
    </Page>
  );
};

export default Home;