import Page from "../../components/page";
import styles from "./style.module.css";

function Team() {
  return (
    <Page pageStyle={styles.page}>
      <section id={styles.team}>
        <header>
          <h2>Meet Our Amazing Team</h2>
        </header>
        <div>
          <div>
            <div>
              <img src="images/profile/p1.png" alt="" />
            </div>
            <div>
              <h5>John Doe</h5>
              <span>Founder & CEO</span>
            </div>
          </div>
          <div>
            <div>
              <img src="images/profile/p2.png" alt="" />
            </div>
            <div>
              <h5>John Doe</h5>
              <span>Chief Operating Officer</span>
            </div>
          </div>
          <div>
            <div>
              <img src="images/profile/p3.png" alt="" />
            </div>
            <div>
              <h5>John Doe</h5>
              <span>Human Resource Manager</span>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Team;