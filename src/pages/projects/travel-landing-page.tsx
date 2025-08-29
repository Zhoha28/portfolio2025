import PageHeader from "@components/sections/blog/pageHeader"

const TravelLandingPage = () => {
  return (
    <main>
      <PageHeader title="Travel the World – Landing Page" subtitle="UI/UX DESIGN PROJECT" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">

                <div className="py-10">
                  <img
                    src="/images/projects/travel.jpeg"
                    className="img-responsive mb-4 rounded"
                    alt="Travel Landing Cover"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Overview</h4>
                  <p>
                    <strong>Travel the World</strong> is a responsive landing page design for a fictional tour and travel company. This was created as part of a school UI/UX design project where the focus was on layout, user interface design, and engaging user experience.
                  </p>
                  <p>
                    The goal was to showcase destinations, inspire travel, and drive user interaction through clean sections, CTA buttons, and destination-based visual storytelling.
                  </p>
                  <p>
                    LINK – <a href="https://www.behance.net/gallery/122325265/Tours-and-travel-UI-website-design" target="_blank" rel="noopener noreferrer">View on Behance</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Features</h4>
                  <ul className="custom-list mb-4">
                    <li>Modern travel-themed UI with clean sectioning</li>
                    <li>Hero banner with strong typography and CTA</li>
                    <li>Sectioned layout for services, packages, testimonials</li>
                    <li>Responsive layout design using grids and flex layouts</li>
                    <li>Consistent use of color, iconography, and hierarchy</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4">
                    <div className="col-6 col-md-4">
                      <img
                        src="/images/projects/238f29122325265.60d74e19f345c.jpg"
                        alt="Travel UI Screenshot 1"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <img
                        src="/images/projects/5e0655122325265.60d74e19f4139.jpg"
                        alt="Travel UI Screenshot 2"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6 col-md-4">
                      <img
                        src="/images/projects/e56f97122325265.60d74e19f39d7.jpg"
                        alt="Travel UI Screenshot 3"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
     
                  </div>
                </div>

                <div className="py-10">
                  <h5>🛠️ Tools & Tech</h5>
                  <div className="tag mb-5">
                    <a href="#">Figma</a>
                    <a href="#">Behance</a>
                    <a href="#">UI/UX</a>
                    <a href="#">Responsive Design</a>
                    <a href="#">Prototyping</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TravelLandingPage
