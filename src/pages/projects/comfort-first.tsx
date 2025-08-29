import PageHeader from "@components/sections/blog/pageHeader"

const BlogSingle = () => {
  return (
    <main>
      <PageHeader title="Comfort First" subtitle="MERN STACK" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">
                
                <div className="py-10">
                  <img
                    src="/images/projects/comfort-first.jpg"
                    className="img-responsive mb-4 rounded"
                    alt="Comfort First"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Comfort First</strong> is a full-stack hotel booking platform built as the final capstone project during the Web Design and Development program at Conestoga College.
                  </p>
                  <p>
                    The platform enables users to book hotels online and offers a smooth user and admin experience, all powered by the MERN stack.
                  </p>
                  <p>
                    LINK – <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Project Scope</h4>
                  <p>
                    The core functionality includes hotel search and filtering, booking management, and secure payments through Stripe. Users can register, log in, view their bookings, and cancel if needed.
                  </p>
                  <p>
                    A custom-built admin panel allows admins to manage hotel listings with full CRUD capabilities and view all bookings made through the platform.
                  </p>
                </div>

                <div className="py-10">
                  <h4>3. Features & Highlights</h4>
                  <ul className="custom-list mb-4">
                    <li>Responsive hotel listing pages with filtering by type, date, and availability.</li>
                    <li>Secure Stripe payment integration for real-time booking transactions.</li>
                    <li>User account system for login, booking history, and cancellations.</li>
                    <li>Admin dashboard with CRUD operations for hotel data and booking management.</li>
                    <li>Animations using AOS for smoother UI interactions.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <img
                        src="/images/projects/cf.png"
                        alt="Comfort First Screenshot 1"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/projects/cf2.png"
                        alt="Comfort First Screenshot 2"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/projects/cf3.png"
                        alt="Comfort First Screenshot 3"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/projects/cf4.png"
                        alt="Comfort First Screenshot 4"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">HTML</a>
                    <a href="#">CSS</a>
                    <a href="#">ReactJS</a>
                    <a href="#">MongoDB</a>
                    <a href="#">ExpressJS</a>
                    <a href="#">NodeJS</a>
                    <a href="#">Stripe</a>
                    <a href="#">AWS</a>
                    <a href="#">AOS</a>
                    <a href="#">SweetAlert</a>
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
