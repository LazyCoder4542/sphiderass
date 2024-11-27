import Page from "../../../components/page";
import styles from "./style.module.css";
function About() {
  return (
    <Page pageStyle={styles.page}>
      <section id={styles.hero}>
        <header>
          <h1>About Us</h1>
          <p>
            At Sphiderass, we blend creativity and technology to deliver
            exceptional results. Our approach includes understanding your goals
            to create impactful solutions that drive user engagement and
            business success.
          </p>
        </header>
      </section>
      <section id={styles.history}>
        <header>
          <h3 className={styles.heading}>History</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Congue pellentesque sem
            pellentesque auctor sodales nulla eget sed justo.Lorem ipsum dolor
            sit amet consectetur. Congue pellentesque sem pellentesque auctor
            sodales nulla eget sed justo.Lorem ipsum dolor sit amet consectetur.
            Congue pellentesque sem pellentesque auctor sodales nulla eget sed
            justo.Lorem ipsum dolor sit amet consectetur. Congue pellentesque
          </p>
        </header>
        <div>
          <div>
            <img src="images/illustrations/illus12.jpeg" alt="" />
          </div>
          <div>
            <h3>We always Deliver the Best</h3>
            <p>
              Because your success is our top priority, our team works
              tirelessly to ensure that every solution we provide is tailored to
              meet your unique needs.
            </p>
            <div className="btn btn-primary">Contact us</div>
          </div>
        </div>
      </section>
      <section id={styles.mission}>
        <header>
          <h3 className={styles.heading}>Mission Statement</h3>
          <p>
            Our mission is to be a Kingdom financier, empowering the fulfillment
            of God's will on earth. We envision becoming the leading tech
            company in Africa, transforming lives and communities through our
            commitment to innovative technological solutions for everyday
            challenges.
          </p>
        </header>
      </section>
      <section id={styles.values}>
        <header>
          <h3 className={styles.heading}>Core Values</h3>
        </header>
        <div>
          <div>
            <img src="images/values.png" alt="" />
            <div>
              <h5>Loyalty</h5>
              <p> Amet consectetur. Congue pellentesque sem pellentesque.</p>
            </div>
          </div>
          <div>
            <img src="images/values.png" alt="" />
            <div>
              <h5>Loyalty</h5>
              <p> Amet consectetur. Congue pellentesque sem pellentesque.</p>
            </div>
          </div>
          <div>
            <img src="images/values.png" alt="" />
            <div>
              <h5>Loyalty</h5>
              <p> Amet consectetur. Congue pellentesque sem pellentesque.</p>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.stats}>
        <div>
          <div>
            <p>Number of projects delivered with excellence.</p>
            <h2>100+</h2>
          </div>
          <div>
            <p>Number of skilled professionals on our team.</p>
            <h2>40+</h2>
          </div>
          <div>
            <p>Number of Clients we have made Happy with our solutions.</p>
            <h2>250+</h2>
          </div>
        </div>
      </section>
      <section id={styles.question}>
        <div>
          <h3>Have a Question We are here to help!</h3>
          <p>
            Our team is ready to assist you with any questions or concerns you
            may have. Whether you need more information about our services, want
            to discuss a project, or just need support, feel free to reach out.
            We’re here to guide you every step of the way.
          </p>
          <div className="btn btn-primary">Contact Us</div>
        </div>
        <div>
          <img src="images/illustrations/illus13.png" alt="" />
        </div>
      </section>
    </Page>
  );
}

export default About;
