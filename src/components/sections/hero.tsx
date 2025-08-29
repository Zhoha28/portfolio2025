import SlideUp from '@utils/animations/slideUp';
import { useInView } from "react-intersection-observer";

const Hero = () => {
  useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-sm-12">
            {/* START HERO DESIGN AREA */}
            <SlideUp className="hero-content rmb-25 text-center">
              <h2>Hi! 👋 My name is Zhoha Damani</h2>
              <h1><span>Front-End Developer </span> & Web Specialist</h1>
              <div className="dot-shape">
                <img src="/images/shape/about-dot.png" alt="Shape" />
              </div>
              <div className="dot-shape2">
                <img src="/images/shape/dot-shape-circle.png" alt="Shape" />
              </div>
              <div className="hero-btns">
                <a href="mailto:zhohadamani@gmail.com" className="theme-btn">Let’s Work Together <i className="far fa-angle-right" /></a>
              </div>
            </SlideUp>
            {/* / END HERO DESIGN AREA */}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero