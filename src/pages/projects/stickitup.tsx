import PageHeader from "@components/sections/blog/pageHeader"

const StickItUp = () => {
  return (
    <main>
      <PageHeader title="Stick It Up" subtitle="E-commerce | Shopify" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">

                <div className="py-10">
                  <img
                    src="/images/projects/siusheet.jpeg"
                    className="img-responsive mb-4 rounded"
                    alt="Stick It Up Screenshot"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Stick It Up (SIU)</strong> is an e-commerce store focused on helping people express themselves through fun, creative, and customizable sticker packs.
                  </p>
                  <p>
                    Users can buy ready-made designs or build their own sticker sets for laptops, bottles, phones, wardrobes, and more. The store is built on <strong>Shopify</strong> using a custom-designed theme.
                  </p>
                  <p>
                    LINK – <a href="http://stickitup.xyz/" target="_blank" rel="noopener noreferrer">View Site</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Project Goals</h4>
                  <p>
                    The goal was to bring SIU’s brand to life with a visually appealing, fast, and intuitive shopping experience. After a UX audit, we focused on building a smooth 3-step checkout process and responsive design that works across all devices.
                  </p>
                  <p>
                    My responsibilities included theme setup, custom layout development, navigation flow, and JavaScript enhancements to improve interactivity and UI/UX responsiveness.
                  </p>
                </div>

                <div className="py-10">
                  <h4>3. Features & Highlights</h4>
                  <ul className="custom-list mb-4">
                    <li>Shopify-based e-commerce store with customized Liquid templates.</li>
                    <li>Mobile-first, responsive layout with dynamic components.</li>
                    <li>Easy 3-step checkout experience to increase conversions.</li>
                    <li>Collection and product page customization with hover and motion effects.</li>
                    <li>Modern, playful UI design to match the sticker theme.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4 row-cols-2 row-cols-md-3">
                    <div className="col">
                      <img
                        src="/images/projects/siu1.png"
                        alt="SIU Homepage"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/siu-2.png"
                        alt="SIU Product Page"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="/images/projects/siu-3.png"
                        alt="SIU Checkout Page"
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

export default StickItUp
