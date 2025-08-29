import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row gap-100 align-items-center">
                    {/* START ABOUT IMAGE DESIGN AREA */}
                    {/* <div className="col-lg-5">
                        <SlideUp delay={3}>
                            <div className="about-image-part">
                                <img src="/images/about/about.jpg" alt="About Me" />
                                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse" />
                                </div>
                                <div className="dot-shape">
                                    <img src="/images/shape/about-dot.png" alt="Shape" />
                                </div>
                            </div>
                        </SlideUp>
                    </div> */}
                    {/* / END ABOUT IMAGE DESIGN AREA */}
                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="col-lg-12">
                        <div className="about-content-part rel z-2 rmb-55">
                            <SectionTitle className="mb-35">
                                <SectionTitle.Name>About Me</SectionTitle.Name>
                                <SectionTitle.Title> Crafting clean, high-impact websites that <span>bring ideas to life.</span></SectionTitle.Title>
                                <SectionTitle.Description>I’m Zhoha — a front-end developer with over 5 years of experience building impactful websites for political campaigns, eCommerce, and agencies.</SectionTitle.Description>
                            </SectionTitle>
                            <SlideUp delay={2}>
                                <ul className="list-style-one three-column">
                                    <li>WordPress Development (Custom Themes & Plugins)</li>
  <li>React.js & Next.js</li>
  <li>JavaScript & TypeScript</li>
  <li>HTML5 & CSS3</li>
  <li>SASS & Bootstrap</li>
  <li>PHP & MySQL</li>
  <li>Shopify Development</li>
  <li>Responsive Web Design</li>
  <li>UI Implementation & Cross-Browser Compatibility</li>
  <li>Git & GitHub Version Control</li>
  <li>Figma & Adobe XD (Design Collaboration)</li>
  <li>SEO Basics & Page Speed Optimization</li>
  <li>Content Management Systems</li>
  <li>Creative Problem Solving & Agile Workflow</li>

                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/* / END ABOUT TEXT DESIGN AREA */}
                </div>
            </div>
        </section>

    )
}

export default About