import styles from "./Hero.module.css";
import {
  AWSIcon,
  FigmaIcon,
  IBMIcon,
  MetaIcon,
  NextIcon,
  SendGridIcon,
  VueIcon,
} from "../../../assets/icon";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
function Hero() {
  return (
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
        <Splide
          options={{
            type: 'loop',
            arrows: false,
            // pagination: false,
            drag: true,
            gap: "1.5rem",
            // perPage: 3,
            autoWidth: true,
            mediaQuery: "min",
            breakpoints: {
              900: {
                destroy: true,
              },
            },
          }}
          extensions={{AutoScroll}}
        >
          <SplideSlide>
            <span>
              <FigmaIcon />
            </span>
          </SplideSlide>
          <SplideSlide>
            <span>
              <NextIcon />
            </span>
          </SplideSlide>
          <SplideSlide>
            <span>
              <VueIcon />
            </span>
          </SplideSlide>
          <SplideSlide>
            <span>
              <AWSIcon />
            </span>
          </SplideSlide>
          <SplideSlide>
            <span>
              <IBMIcon />
            </span>
          </SplideSlide>
          <SplideSlide>
            <span>
              <SendGridIcon />
            </span>
          </SplideSlide>
          <SplideSlide>
            <span>
              <MetaIcon />
            </span>
          </SplideSlide>
          <SplideSlide>
            <span>
              <img src="icons/tech/the_assisials.png"></img>
            </span>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default Hero;
