import {
  AWSIcon,
  FigmaIcon,
  IBMIcon,
  MetaIcon,
  NextIcon,
  SendGridIcon,
  VueIcon,
} from "../../../assets/icon";
import Page from "../../../components/page";
import { useTheme } from "../../../context/theme";
import styles from "./style.module.css";
const Home = () => {
  const { mode } = useTheme();
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
          <div className={`${styles.see_more} btn`}>
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
            <ul>
              <li className={styles.selected}>All</li>
              <li>Websites</li>
              <li>Mobile apps</li>
              <li>Social media Branding</li>
              <li>Graphic Design</li>
              <li>SEO</li>
            </ul>
          </nav>
          <div className={styles.samples}>
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
          </div>
          <div className={`${styles.see_more} btn`}>
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
        </div>
      </section>
      <section id={styles.testimonials}>
        <header>
          <h2>What Our Clients Are Saying</h2>
        </header>
        <div>
          <Testimonial
            name="Dunsin Oyekan"
            image="images/profile/Dunsin_Oyekan.jpeg"
            designation="CEO of The Great Commission"
            testimony="Sphiderass is a remarkable company that truly values excellence and integrity. Their team is incredibly professional, and they consistently go above and beyond. They always meet deadlines, offering outstanding value throughout the entire process."
          />
          <Testimonial
            name="Dunsin Oyekan"
            image="images/profile/Dunsin_Oyekan.jpeg"
            designation="CEO of The Great Commission"
            testimony="Sphiderass is a remarkable company that truly values excellence and integrity. Their team is incredibly professional, and they consistently go above and beyond. They always meet deadlines, offering outstanding value throughout the entire process."
          />
          <Testimonial
            name="Dunsin Oyekan"
            image="images/profile/Dunsin_Oyekan.jpeg"
            designation="CEO of The Great Commission"
            testimony="Sphiderass is a remarkable company that truly values excellence and integrity. Their team is incredibly professional, and they consistently go above and beyond. They always meet deadlines, offering outstanding value throughout the entire process."
          />
          <Testimonial
            name="Dunsin Oyekan"
            image="images/profile/Dunsin_Oyekan.jpeg"
            designation="CEO of The Great Commission"
            testimony="Sphiderass is a remarkable company that truly values excellence and integrity. Their team is incredibly professional, and they consistently go above and beyond. They always meet deadlines, offering outstanding value throughout the entire process."
          />
        </div>
      </section>
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
      <section id={styles.blog}>
        <header>
          <h2>See Our Blog</h2>
          <p>
            Stay current with all the latest trends, software, industry
            expectation and more.
          </p>
        </header>
        <h3>Recent Blog Posts</h3>
        <div className={styles.blogs}>
          <div className={styles.blog}>
            <img src="images/illustrations/illus8.jpeg" alt="" />
            <div>
              <div>
                <span>Design</span>
                <h4>
                  UX review presentations
                  <span>
                    <img src="icons/arr_up_right.svg" alt="" />
                  </span>
                </h4>
                <p>
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
              </div>
              <div className={`${styles.btn} btn btn-primary`}>Read More</div>
            </div>
          </div>
          <div className={styles.blog}>
            <img src="images/illustrations/illus9.jpeg" alt="" />
            <div>
              <div>
                <span>Product</span>
                <h4>
                  Migrating to Linear 101
                  <span>
                    <img src="icons/arr_up_right.svg" alt="" />
                  </span>
                </h4>
                <p>
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get started.
                </p>
              </div>
              <div className={`${styles.btn} btn btn-primary`}>Read More</div>
            </div>
          </div>
        </div>
        <div className={`${styles.see_more} btn`}>
          <span>Visit our blog page</span>
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
      </section>
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

interface ITestimony {
  name: string;
  image: string;
  designation: string;
  testimony: string;
}

function Testimonial({ name, image, designation, testimony }: ITestimony) {
  return (
    <div className={styles.testimonial}>
      <div>
        <img src={image}></img>
        <span>
          <h5>{name}</h5>
          <p>{designation}</p>
        </span>
      </div>
      <p>{testimony}</p>
    </div>
  );
}

function ContactForm() {
  return <>This is a form</>;
}
