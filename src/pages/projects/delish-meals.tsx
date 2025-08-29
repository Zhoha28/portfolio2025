import PageHeader from "@components/sections/blog/pageHeader"

const BlogSingle = () => {
  return (
    <main>
      <PageHeader title="Delish Meals Web Project" subtitle="WORDPRESS" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">
                
                <div className="py-10">
                  <img
                    src="/images/projects/delishmeals-1.webp"
                    className="img-responsive mb-4 rounded"
                    alt="Delish Meals Project"
                  />
                </div>

        

                <div className="">
                  <div className="post-meta mb-4 d-flex flex-wrap gap-4">
                    <span><i className="fa fa-calendar" /> 2024</span>
                    <span><i className="fa fa-cogs" /> WordPress, ACF, WooCommerce, PHP</span>
                    <span><i className="fa fa-map-marker" /> Toronto, Canada</span>
                  </div>
                </div>

                <div className="pb-10">
                  <h4>🔍 Project Brief</h4>
                  <p>
                    <strong>Delish Meals – Ghar Ki Rasoi</strong> is a local Indian tiffin service that delivers fresh, home-cooked meals to students, working professionals, and families across the Greater Toronto Area. Their delivery zones included Downtown, Mississauga, Brampton, North York, Scarborough, Etobicoke, and more.
                  </p>
                  <p>
                    I was brought on board to help modernize their existing WordPress site — both visually and functionally — to keep up with their growing customer base and streamline internal operations.
                  </p>
                </div>

                <div className="py-10">
                  <h4>🎯 My Responsibilities</h4>
                  <ul className="custom-list mb-4">
                    <li>Redesigned the entire website using <strong>Elementor Pro</strong> for a clean, responsive layout.</li>
                    <li>Built custom sections for Meal Plans, Pricing, Delivery Zones, and FAQs using <strong>Advanced Custom Fields (ACF)</strong>.</li>
                    <li>Integrated and customized <strong>WooCommerce</strong> to handle non-standard subscription flows.</li>
                    <li>Wrote <strong>custom PHP logic</strong> to extend functionality of a start-date selector plugin.</li>
                    <li>Developed a <strong>custom admin dashboard</strong> for subscription tracking and order overview.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4>⚙️ Technical Highlights</h4>
              <p>
                    I used ACF Pro to create flexible content modules for the admin panel, allowing the client to manage meal plans, pricing, and delivery content without ever touching the code.
              </p>
                  <p>
                    A major feature was the implementation of a **custom start date plugin** — extended with PHP to allow only future weekdays and restrict past dates. I also added backend logic to automate the meal cycle visibility and calculate renewal dates.
                  </p>
                  <p>
                    The dashboard I created allowed the client to view all active subscriptions, including user data, start dates, and meal types — improving how they managed logistics without relying on third-party tools.
                  </p>
                </div>

                <div className="py-10">
                  <h4>🚀 Outcome & Transition</h4>
                  <p>
                    The WordPress site successfully served as the business’s main ordering platform and helped them scale operations through automated flows and custom backend features. Eventually, as the business expanded, they migrated fully to Shopify for advanced e-commerce scalability — but the work I delivered formed the strong foundation for their digital operations.
                  </p>
                </div>

                <div className="py-10">
                  <h4>📘 What I Learned</h4>
                  <ul className="custom-list mb-4">
                    <li>How to use ACF for building admin-friendly content systems</li>
                    <li>Advanced WooCommerce customization and plugin tweaking</li>
                    <li>Client communication and iteration based on real-world needs</li>
                    <li>Balancing design flexibility with technical structure using Elementor</li>
                  </ul>
                </div>

<div className="py-10">
  <h4 className="mb-4">📸 Gallery</h4>
  <div className="row g-4">
    <div className="col-md-6">
      <img
        src="/images/projects/DM1.png"
        alt="Delish Meals Screenshot 1"
        className="img-fluid rounded shadow-sm"
      />
    </div>
    <div className="col-md-6 ">
      <img
        src="/images/projects/DM2.png"
        alt="Delish Meals Screenshot 2"
        className="img-fluid rounded shadow-sm"
      />
    </div>
    <div className="col-md-6">
      <img
        src="/images/projects/DM3.png"
        alt="Delish Meals Screenshot 3"
        className="img-fluid rounded shadow-sm"
      />
    </div>
    <div className="col-md-6">
      <img
        src="/images/projects/DM4.png"
        alt="Delish Meals Screenshot 4"
        className="img-fluid rounded shadow-sm"
      />
    </div>
  </div>
</div>

                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">WordPress</a>
                    <a href="#">Elementor</a>
                    <a href="#">ACF Pro</a>
                    <a href="#">WooCommerce</a>
                    <a href="#">PHP</a>
                    <a href="#">MySQL</a>
                    <a href="#">HTML5</a>
                    <a href="#">CSS3</a>
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
