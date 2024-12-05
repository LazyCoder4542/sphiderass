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
      <section id={styles.article}>
        <div>
          <div>
            <p>
              In the evolving field of design, effective communication is
              crucial. UX review presentations play a vital role in conveying
              insights, gathering feedback, and fostering collaboration among
              team members.A well-structured presentation not only informs but
              also inspires action, making it essential for UX professionals to
              master this skill.
            </p>
            <p>
              What is UX? User Experience (UX) encompasses the overall
              experience a user has when interacting with a product or service.
              It includes usability, accessibility, and emotional response. A
              positive UX ensures products are functional and enjoyable, making
              it vital for organizations to prioritize user-centered design and
              communicate findings effectively.
            </p>
          </div>
          <div>
            <img src="images/illustrations/illus28.jpeg" alt="" />
          </div>
        </div>
        <article></article>
      </section>
    </Page>
  );
}

export default Blog;
