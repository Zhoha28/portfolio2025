import PageHeader from "@components/sections/blog/pageHeader"

const HomeSavy = () => {
  return (
    <main>
      <PageHeader title="Home Savy" subtitle="Furniture Hero Section – UI Design Project" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">

                <div className="py-10">
                  <img
                    src="/images/projects/furniture.webp"
                    className="img-responsive mb-4 rounded"
                    alt="Home Savy Hero Design"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Home Savy</strong> is a hero section UI/UX design project created as part of a school assignment. It focuses on a clean and modern landing experience for a furniture store brand.
                  </p>
                  <p>
                    The task involved first wireframing the layout and then transforming it into a polished, high-fidelity visual design using Figma.
                  </p>
                  <p>
                    LINK – <a href="https://www.behance.net/gallery/121835253/Home-Savvy-Furniture-Design-Landing-Page" target="_blank" rel="noopener noreferrer">View Project on Behance</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Design Process</h4>
                  <ul className="custom-list mb-4">
                    <li><strong>Wireframe:</strong> A simple layout was created to define content structure, spacing, and flow.</li>
                    <li><strong>Final UI:</strong> High-fidelity mockup using neutral colors, bold CTA, and product imagery tailored for a furniture brand.</li>
                    <li><strong>Goal:</strong> Encourage user interaction with minimal distractions and a clean first impression.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery – Wireframe & Final Design</h4>
                  <div className="row g-4">
                    <div className="col-6">
                      <img
                        src="/images/projects/homesavy-wf.webp"
                        alt="Wireframe"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/images/projects/homesavy.webp"
                        alt="Final UI Design"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>

                                    <div className="col-6">
                      <img
                        src="/images/projects/homesavy-m.webp"
                        alt="Wireframe"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/images/projects/homesavy-m-wf.webp"
                        alt="Final UI Design"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                  
                </div>

                <div className="py-10">
                  <h5>🛠️ Tools Used</h5>
                  <div className="tag mb-5">
                    <a href="#">Figma</a>
                    <a href="#">Wireframing</a>
                    <a href="#">UI/UX</a>
                    <a href="#">Landing Page</a>
                    <a href="#">Typography</a>
                    <a href="#">Visual Design</a>
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

export default HomeSavy
