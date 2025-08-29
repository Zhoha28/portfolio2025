import PageHeader from "@components/sections/blog/pageHeader"

const Bookin = () => {
  return (
    <main>
      <PageHeader title="Bookin" subtitle="Full-Stack Web Application" />

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
                    src="/images/projects/books.jpeg"
                    className="img-responsive mb-4 rounded"
                    alt="Bookin"
                  />
                </div>

                <div className="py-10">
                  <h4>📘 Introduction</h4>
                  <p>
                    <strong>Bookin</strong> is a full-stack web application built as the final project during the Full-Stack Development program. It uses Angular for the frontend and Node.js, Express, and MongoDB for the backend.
                  </p>
                  <p>
                    The app demonstrates SPA (Single Page Application) behavior with Angular routing, reusable components, services, and backend integration.
                  </p>
                  <p>
                    <a href="https://resonant-sorbet-2039c5.netlify.app/" target="_blank" rel="noopener noreferrer">Website</a> – <a href="https://github.com/Zhoha28/book-store-application" target="_blank" rel="noopener noreferrer">View Code</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>🧩 Project Scope</h4>
                  <p>
                    Users can browse and manage books in a streamlined, intuitive interface. The system supports full CRUD functionality for managing book records.
                  </p>
                  <p>
                    A well-structured service layer connects Angular with backend APIs built in Express. The app uses MongoDB for data storage and features robust routing using Angular Router.
                  </p>
                </div>

                <div className="py-10">
                  <h4>🚀 Features</h4>
                  <ul className="custom-list mb-4">
                    <li>Fully responsive Angular frontend.</li>
                    <li>Single Page Application with Angular Router.</li>
                    <li>CRUD operations for books (Create, Read, Update, Delete).</li>
                    <li>Custom services for data fetching and state management.</li>
                    <li>TypeScript-based reusable components.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4">
                    <div className="col-md-6 ">
                      <img
                        src="/images/projects/bookin1.png"
                        alt="Bookin Screenshot 1"
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
                    <a href="#">Angular</a>
                    <a href="#">TypeScript</a>
                    <a href="#">NodeJS</a>
                    <a href="#">ExpressJS</a>
                    <a href="#">MongoDB</a>
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

export default Bookin
