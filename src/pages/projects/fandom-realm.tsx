import PageHeader from "@components/sections/blog/pageHeader"

const FandomRealm = () => {
  return (
    <main>
      <PageHeader title="Fandom Realm" subtitle="E-commerce | Shopify Migration" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">

                <div className="py-10">
                  <img
                    src="/images/projects/fr.jpeg"
                    className="img-responsive mb-4 rounded"
                    alt="Fandom Realm Screenshot"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Fandom Realm</strong> was one of India’s fastest-growing online stores for pop culture merchandise — covering everything from anime and superheroes to TV shows and games.
                  </p>
                  <p>
                    I contributed to the full redesign and platform migration from Magento to Shopify, optimizing both the front-end experience and CMS usability.
                  </p>
                  <p>
                    ARCHIVE LINK – <a href="https://web.archive.org/web/20220705150605/https://fandomrealm.in/" target="_blank" rel="noopener noreferrer">View Archived Site</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Migration & Scope</h4>
                  <p>
                    The Magento-based site was becoming difficult to manage and lacked flexibility. I helped transition the store to <strong>Shopify</strong>, creating a custom theme that better reflected the brand and offered a more intuitive shopping experience.
                  </p>
                  <p>
                    This included enhancing UI/UX, optimizing checkout flow, and implementing performance improvements tailored for both desktop and mobile users.
                  </p>
                </div>

                <div className="py-10">
                  <h4>3. Features & Highlights</h4>
                  <ul className="custom-list mb-4">
                    <li>Full migration from Magento to Shopify.</li>
                    <li>Custom Shopify theme with improved layout and responsiveness.</li>
                    <li>Enhanced homepage and product collections layout.</li>
                    <li>Simplified, faster checkout process.</li>
                    <li>UI/UX improvements using Liquid, CSS animations, and JavaScript components.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4 row-cols-2">
                    <div className="col">
                      <img
                        src="/images/projects/fr1.png"
                        alt="Fandom Realm Homepage"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/fr2.png"
                        alt="Product Page"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">Shopify</a>
                    <a href="#">Liquid</a>
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">JavaScript</a>
                    <a href="#">jQuery</a>
                    <a href="#">Shopify Admin</a>
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

export default FandomRealm
