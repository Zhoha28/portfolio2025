import PageHeader from "@components/sections/blog/pageHeader"

const BlogSingle = () => {
  return (
    <main>
      <PageHeader title="Start Today – OSMH" subtitle="WordPress | Campaign Site" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">
                
                <div className="py-10">
                  <img
                    src="/images/projects/osmh-meta.png"
                    className="img-responsive mb-4 rounded"
                    alt="Start Today OSMH"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Start Today – OSMH</strong> is a digital advocacy platform created for Orillia Soldiers' Memorial Hospital to help raise awareness and generate community action for hospital funding.
                  </p>
                  <p>
                    This site was built during my time at <strong>Creative Currency</strong>, using a custom WordPress theme with full design implementation and integrated campaign tools.
                  </p>
                  <p>
                    LINK – <a href="https://starttodayosmh.ca/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Project Contributions</h4>
                  <p>
                    I was responsible for building the custom theme in WordPress, implementing the full UI based on provided designs, and integrating specialized campaign tools like New/Mode for letter-writing to political representatives.
                  </p>
                  <p>
                    I also configured the <strong>Brevo (Sendinblue)</strong> email marketing system to manage newsletter signups and automated follow-ups.
                  </p>
                </div>

                <div className="py-10">
                  <h4>3. Features & Highlights</h4>
                  <ul className="custom-list mb-4">
                    <li>Fully custom WordPress theme built from scratch.</li>
                    <li>Responsive and accessible layout with mobile optimization.</li>
                    <li>Embedded New/Mode letter-writing tool for campaign participation.</li>
                    <li>Mailing list setup and configuration using Brevo (formerly Sendinblue).</li>
                    <li>Content managed with a user-friendly admin panel.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4 row-cols-2 row-cols-md-3">
                    <div className="col">
                      <img
                        src="/images/projects/osmh1.png"
                        alt="Start Today Screenshot 1"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/osmh-2.png"
                        alt="Start Today Screenshot 2"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/osmh-3.png"
                        alt="Start Today Screenshot 3"
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
                    <a href="#">New/Mode</a>
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
