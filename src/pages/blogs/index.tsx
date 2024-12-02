import { useNavigate } from "react-router-dom";
import Page from "../../components/page";
import styles from "./style.module.css";

function Blogs() {
  return (
    <Page pageStyle={styles.page}>
      <section id={styles.hero}>
        <header>
          <span>OUR BLOG</span>
          <h1>
            THE <span>SPHIDERASS</span> JOURNAL
          </h1>
          <p>
            Craving tech insights that matter?
            <br /> The Sphiderass Journal has you covered. Subscribe now for the
            knowledge that you need!
          </p>
        </header>
      </section>
      <section id={styles.popular} className={styles.blogs}>
        <header>
          <h2>Popular Blogs</h2>
          <p>View our most popular blogs of all time</p>
        </header>
        <div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
      <section id={styles.latest} className={styles.blogs}>
        <header>
          <h2>All Blogs</h2>
          <p>View our most newest blogs of all time</p>
        </header>
        <div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </Page>
  );
}

export default Blogs;

function BlogCard() {
  const navigate = useNavigate()
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="images/illustrations/illus8.jpeg" alt="" />
      </div>
      <div className={styles.details}>
        <span>Design</span>
        <h4>UX review presentations</h4>
        <p>
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
        <div>
          <div>
            <img src="images/profile/p2.jpeg" alt="" />
          </div>
          <div>
            <h6>Olivia Rhye</h6>
            <span>20 Jan 2022</span>
          </div>
        </div>
      </div>
      <div onClick={() => {
        navigate(`/blog/${generateKey()}`)
      }} className="btn">Read More</div>
    </div>
  );
}
function generateKey(length = 5) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < length; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
}

console.log(generateKey());