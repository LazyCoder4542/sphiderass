import styles from "./Testimonial.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';
function Testimonials() {
  return (
    <section id={styles.testimonials}>
      <header>
        <h2>What Our Clients Are Saying</h2>
      </header>
      <Splide
        options={{
          type: 'loop',
          arrows: false,
          // pagination: false,
          drag: true,
          gap: "1.5rem",
          mediaQuery: "min",
          perPage: 1,
          autoplay: true,
          breakpoints: {
            640: {
              destroy: true,
            },
          },
        }}
      >
        <SplideSlide>
          <Testimonial
            name="Dunsin Oyekan"
            image="images/profile/Dunsin_Oyekan.jpeg"
            designation="CEO of The Great Commission"
            testimony="Sphiderass is a remarkable company that truly values excellence and integrity. Their team is incredibly professional, and they consistently go above and beyond. They always meet deadlines, offering outstanding value throughout the entire process."
          />
        </SplideSlide>
        <SplideSlide>
          <Testimonial
            name="Dunsin Oyekan"
            image="images/profile/Dunsin_Oyekan.jpeg"
            designation="CEO of The Great Commission"
            testimony="Sphiderass is a remarkable company that truly values excellence and integrity. Their team is incredibly professional, and they consistently go above and beyond. They always meet deadlines, offering outstanding value throughout the entire process."
          />
        </SplideSlide>
        <SplideSlide>
          <Testimonial
            name="Dunsin Oyekan"
            image="images/profile/Dunsin_Oyekan.jpeg"
            designation="CEO of The Great Commission"
            testimony="Sphiderass is a remarkable company that truly values excellence and integrity. Their team is incredibly professional, and they consistently go above and beyond. They always meet deadlines, offering outstanding value throughout the entire process."
          />
        </SplideSlide>
        <SplideSlide>
          <Testimonial
            name="Dunsin Oyekan"
            image="images/profile/Dunsin_Oyekan.jpeg"
            designation="CEO of The Great Commission"
            testimony="Sphiderass is a remarkable company that truly values excellence and integrity. Their team is incredibly professional, and they consistently go above and beyond. They always meet deadlines, offering outstanding value throughout the entire process."
          />
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default Testimonials;

interface ITestimony {
  name: string;
  image: string;
  designation: string;
  testimony: string;
}

export function Testimonial({
  name,
  image,
  designation,
  testimony,
}: ITestimony) {
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
