import PageHeader from "@components/sections/blog/pageHeader"

const BlogSingle = () => {
  return (
    <main>
      <PageHeader title="Safe & Well WR" subtitle="WordPress | Custom Theme" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">

                <div className="py-10">
                  <img
                    src="/images/projects/wr.png"
                    className="img-responsive mb-4 rounded"
                    alt="Safe & Well WR"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Safe & Well WR</strong> is a one-page website built on a tight timeline for the Canadian Safe Workplace Program (CSWP).
                  </p>
                  <p>
                    Developed with a custom WordPress theme, the site focuses on clear communication, responsiveness, and user-friendly navigation.
                  </p>
                  <p>
                    This project was completed while working at <strong>Creative Currency</strong>.
                  </p>
                  <p>
                    LINK – <a href="https://safeandwellwr.ca/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Project Contributions</h4>
                  <ul>
                    <li>Built a clean and responsive one-page WordPress site tailored for quick deployment.</li>
                    <li>Implemented custom theme development aligned with client branding and goals.</li>
                    <li>Ensured fast load times and optimized user experience across devices.</li>
                    <li>Coordinated effectively to meet aggressive project deadlines.</li>
                  </ul>
                </div>

   

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4 row-cols-2 ">
                    <div className="col">
                      <img
                        src="/images/projects/wr2.png"
                        alt="Safe & Well WR Screenshot 1"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/wr3.png"
                        alt="Safe & Well WR Screenshot 2"
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
