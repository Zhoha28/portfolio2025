import PageHeader from "@components/sections/blog/pageHeader"

const BlogSingle = () => {
  return (
    <main>
      <PageHeader title="Rubicon Strategy" subtitle="WordPress | Custom Theme" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">

                <div className="py-10">
                  <img
                    src="/images/projects/rubicon.png"
                    className="img-responsive mb-4 rounded"
                    alt="Rubicon Strategy"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Rubicon Strategy</strong> is a website for a consulting firm built with a custom WordPress theme based on a detailed UI/UX design.
                  </p>
                  <p>
                    The site features a clean and modern design, with a focus on performance and user engagement, developed during my tenure at <strong>Creative Currency</strong>.
                  </p>
                  <p>
                    LINK – <a href="https://rubiconstrategy.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Project Contributions</h4>
                  <ul>
                    <li>Developed a fully custom WordPress theme tailored to the client’s branding and design specifications.</li>
                    <li>Implemented a Lottie animation for the loading screen to enhance user experience.</li>
                    <li>Ensured responsive design and accessibility across devices.</li>
                    <li>Optimized site speed and implemented SEO best practices.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4>3. Features & Highlights</h4>
                  <ul className="custom-list mb-4">
                    <li>Custom WordPress theme with dynamic content management</li>
                    <li>Smooth Lottie animation for page loading</li>
                    <li>Responsive and accessible design</li>
                    <li>Optimized for SEO and performance</li>
                    <li>Maintained a clean codebase adhering to WordPress best practices</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4 row-cols-2 row-cols-md-3">
                    <div className="col">
                      <img
                        src="/images/projects/rubicon-1.png"
                        alt="Rubicon Strategy Screenshot 1"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/rubicon-2.png"
                        alt="Rubicon Strategy Screenshot 2"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/rubicon-3.png"
                        alt="Rubicon Strategy Screenshot 3"
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
                    <a href="#">Lottie</a>
                    <a href="#">GSAP</a>
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
