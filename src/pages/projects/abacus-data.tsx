import PageHeader from "@components/sections/blog/pageHeader"

const BlogSingle = () => {
  return (
    <main>
      <PageHeader title="Abacus Data" subtitle="WordPress Development" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">

                <div className="py-10">
                  <img
                    src="/images/projects/abacus.png"
                    className="img-responsive mb-4 rounded"
                    alt="Abacus Data"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Abacus Data</strong> is a professional data and research firm’s website developed while working at <strong>Creative Currency</strong>.
                  </p>
                  <p>
                    The site was built based on detailed design specifications, focusing on a clean, intuitive interface to present research data effectively.
                  </p>
                  <p>
                    LINK – <a href="https://abacusdata.ca/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Project Contributions</h4>
                  <ul>
                    <li>Part of the development team responsible for building the WordPress site.</li>
                    <li>Implemented Brevo (email marketing) integration for newsletter and contact management.</li>
                    <li>Set up posts with filtering and category-based content organization for easy browsing.</li>
                    <li>Cleaned up and optimized post content for better usability and SEO.</li>
                    <li>Worked closely with designers to ensure pixel-perfect implementation of UI/UX.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4>3. Features & Highlights</h4>
                  <ul className="custom-list mb-4">
                    <li>Custom WordPress development within a team environment</li>
                    <li>Brevo integration for seamless email marketing and contact list management</li>
                    <li>Dynamic posts setup with advanced filtering options</li>
                    <li>Content cleanup and SEO-friendly formatting</li>
                    <li>Responsive and accessible UI based on provided designs</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4 row-cols-2 row-cols-md-3">
                    <div className="col">
                      <img
                        src="/images/projects/abacusdata-1.png"
                        alt="Abacus Data Screenshot 1"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/abacusdata-2.png"
                        alt="Abacus Data Screenshot 2"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/abacusdata-3.png"
                        alt="Abacus Data Screenshot 3"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">WordPress</a>
                    <a href="#">PHP</a>
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JavaScript</a>
                    <a href="#">Brevo</a>
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

export default BlogSingle
