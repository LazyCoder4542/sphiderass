import styles from "./Blogs.module.css"

function Blogs() {
  return (
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
      <div className={`see_more btn`}>
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
  );
}

export default Blogs;
