import { Input } from "@chakra-ui/react";
import Page from "../../components/layouts/page";
import styles from "./style.module.css";
function Blog() {
  return (
    <Page pageStyle={styles.page}>
      <section id={styles.hero}>
        <header>
          <h1>UX review presentations</h1>
          <p>
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </header>
      </section>
      <section id={styles.main}>
        <div id={styles.article}>
          <div className={styles.text}>
            <p>
              In the evolving field of design, effective communication is
              crucial. UX review presentations play a vital role in conveying
              insights, gathering feedback, and fostering collaboration among
              team members.A well-structured presentation not only informs but
              also inspires action, making it essential for UX professionals to
              master this skill.
            </p>
          </div>
          <div className={styles.text}>
            <h5>What is UX?</h5>
            <p>
              User Experience (UX) encompasses the overall
              experience a user has when interacting with a product or service.
              It includes usability, accessibility, and emotional response. A
              positive UX ensures products are functional and enjoyable, making
              it vital for organizations to prioritize user-centered design and
              communicate findings effectively.
            </p>
          </div>
          <div>
            <img src="/images/illustrations/illus28.jpeg" alt="" />
          </div>
          <div className={styles.text}>
            <h5>How You Work</h5>
            <p>
              Creating compelling UX presentations begins with gathering data
              from user research and usability testing. Analyze this information
              to identify key insights for your presentation. Structure your
              content to highlight important findings and recommendations, using
              visual aids like wireframes and user journey maps to keep your
              audience engaged.
            </p>
          </div>
          <div className={styles.text}>
            <h5>Why UX Review?</h5>
            <p>
              Conducting UX reviews is essential for ensuring
              designs meet user needs and business objectives. These reviews
              help assess design effectiveness, identify areas for improvement,
              and validate assumptions based on user feedback. Presenting these
              outcomes clearly fosters collaboration and encourages stakeholder
              buy-in.
            </p>
          </div>
          <div className={styles.text}>
            <h5>Presentations</h5>
            <p>
              To create impactful UX review presentations, follow
              these strategies: Know Your Audience: Tailor your presentation to
              the interests and knowledge level of your audience, whether they
              are designers, developers, or executives.
            </p>
          </div>
        </div>
        <aside>
          <div>
            <ul>
              <li>Introduction</li>
              <li>What is UX?</li>
              <li>How you work</li>
              <li>Why UX review?</li>
              <li>Presentations</li>
            </ul>
            <div className={styles.author}>
              <span>Written By</span>
              <div>
                <span></span>
                <span>
                  <p>Mariah Carey</p>
                  <p>Designer, Sphiderass Web</p>
                </span>
              </div>
            </div>
            <div className={styles.newsletter}>
              <p>Subscribe to our Newsletter</p>
              <div>
                <Input placeholder="Enter your email" type="email" name="email" />
                <div className="btn btn-primary"> Subscribe</div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </Page>
  );
}

export default Blog;
