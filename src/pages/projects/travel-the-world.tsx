import PageHeader from "@components/sections/blog/pageHeader"

const TravelTheWorld = () => {
  return (
    <main>
      <PageHeader title="Travel the World" subtitle="WORDPRESS WEBSITE" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="single-blog-post-details wow fadeInDown"
                data-wow-delay="0.2s"
              >
                <div className="py-10">
                  <img
                    src="/images/projects/ttw.jpeg"
                    className="img-responsive mb-4 rounded"
                    alt="Travel the World"
                  />
                </div>

                <div className="py-10">
                  <h4>🌍 Project Overview</h4>
                  <p>
                    <strong>Travel the World</strong> is a custom-designed WordPress website
                    built to showcase travel destinations and packages with a modern,
                    responsive layout. The goal was to create a visually appealing,
                    informative, and easy-to-manage travel site using WordPress.
                  </p>
                  <p>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Visit Site
                    </a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>📌 Features</h4>
                  <ul className="custom-list mb-4">
                    <li>Fully responsive design for desktop, tablet, and mobile.</li>
                    <li>Interactive UI with jQuery for enhanced animations and behaviors.</li>
                    <li>Travel packages displayed using custom post types.</li>
                    <li>Simple content management through WordPress admin panel.</li>
                    <li>Newsletter integration and contact form.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4">
                    <div className="col-md-6 ">
                      <img
                        src="/images/projects/travel1.png"
                        alt="Travel the World Screenshot 1"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-md-6 ">
                      <img
                        src="/images/projects/travel2.png"
                        alt="Travel the World Screenshot 2"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/projects/travel3.png"
                        alt="Travel the World Screenshot 3"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-md-6 ">
                      <img
                        src="/images/projects/travel4.png"
                        alt="Travel the World Screenshot 4"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">WordPress</a>
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JavaScript</a>
                    <a href="#">jQuery</a>
                    <a href="#">PHP</a>
                    <a href="#">MySQL</a>
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

export default TravelTheWorld
