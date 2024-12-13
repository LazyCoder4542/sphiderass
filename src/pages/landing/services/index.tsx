import { ContactFormTwo } from "@/components/atom/ContactForm";
import Page from "../../../components/layouts/page";
import styles from "./style.module.css";
function Services() {
  return (
    <Page pageStyle={styles.page}>
      <section id={styles.hero}>
        <header>
          <h1>Our Services</h1>
          <p>
            At Sphidrass, we specialize in providing scalable and efficient
            digital solutions across various industries. From AI-driven
            platforms to web and mobile development, our services are tailored
            to meet unique business needs.
          </p>
        </header>
      </section>
      <section id={styles.services}>
        <div>
          <div>
            <img src="images/illustrations/illus14.png" alt="" />
            <div>
              <h3>UI/UX Design</h3>
              <p>
                Unlock the secret to user engagement! Our UI/UX design team
                crafts intuitive and visually stunning interfaces that not only
                captivate but also drive action. Curious about how we transform
                user experiences?
              </p>
              <div className="btn">Explore more</div>
            </div>
          </div>
          <div>
            <img src="images/illustrations/illus15.png" alt="" />
            <div>
              <h3>Mobile Development</h3>
              <p>
                Imagine your ideas coming to life! With our mobile and web
                development expertise, we build powerful applications that
                resonate across devices. What groundbreaking features will your
                app unveil?
              </p>
              <div className="btn">Explore more</div>
            </div>
          </div>
          <div>
            <img src="images/illustrations/illus16.png" alt="" />
            <div>
              <h3>IT Support Services </h3>
              <p>
                Don’t let technical issues hold you back! Our dedicated IT
                support services are here to troubleshoot and maintain your
                systems, ensuring smooth sailing. What challenges could become
                opportunities with our expertise?
              </p>
              <div className="btn">Explore more</div>
            </div>
          </div>
        </div>
        <div className="btn">View Other Services</div>
      </section>
      <section id={styles.benefits}>
        <header>
          <h3>Why choose us</h3>
        </header>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="images/expertise.png" alt="" />

            <h4>Expertise</h4>
            <p>
              Our team consists of industry experts with years of hands-on
              experience, ensuring top-tier solutions that meet your needs.
            </p>
          </div>
          <div className={styles.card}>
            <img src="images/solutions.png" alt="" />

            <h4>Tailored Solutions</h4>
            <p>
              We don't believe in one-size-fits-all. Every project is customized
              to align with your specific goals and business objectives.
            </p>
          </div>
          <div className={styles.card}>
            <img src="images/record.png" alt="" />
            <h4>Proven Track Record</h4>
            <p>
              With a portfolio of successful projects and satisfied clients, our
              results speak for themselves.
            </p>
          </div>
          <div className={styles.card}>
            <img src="images/visuals.png" alt="" />
            <h4>Visuals</h4>
            <p>
              We craft visually engaging designs that not only look great but
              also enhance user experience and brand identity.
            </p>
          </div>
        </div>
      </section>
      <section id={styles.contact}>
        <div>
          <header>
            <h3>Send us a message</h3>
            <p>
              Please fill out the form below and we'll get back to you as soon
              as possible!
            </p>
          </header>
          <div>
            <ContactFormTwo />
          </div>
        </div>
        <img src="images/illustrations/illus17.jpeg" alt="" />
      </section>
    </Page>
  );
}

export default Services;
