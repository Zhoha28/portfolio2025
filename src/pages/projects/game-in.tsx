import PageHeader from "@components/sections/blog/pageHeader"

const GameIn = () => {
  return (
    <main>
      <PageHeader title="GAME-IN" subtitle="Full-Stack Web Application" />

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
                    src="/images/projects/games.jpeg"
                    className="img-responsive mb-4 rounded"
                    alt="GAME-IN"
                  />
                </div>

                <div className="py-10">
                  <h4>🎮 Introduction</h4>
                  <p>
                    <strong>GAME-IN</strong> is a full-stack web application built as a final project in the Full-Stack Development course. It was developed using the MEAN stack with Angular powering the frontend and Node.js/Express handling the backend.
                  </p>
                  <p>
                    The application demonstrates Angular routing, service creation, reusable components, and full CRUD interaction with a MongoDB database.
                  </p>
                  <p>
                    <a href="#" target="_blank" rel="noopener noreferrer">View Code</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>📦 Project Scope</h4>
                  <p>
                    GAME-IN simulates an online gaming database, allowing users to browse, add, update, or delete game listings. It includes a responsive UI, route protection, and backend API handling through Express.
                  </p>
                  <p>
                    TypeScript was used to ensure type safety and scalability throughout the Angular frontend.
                  </p>
                </div>

                <div className="py-10">
                  <h4>✨ Key Features</h4>
                  <ul className="custom-list mb-4">
                    <li>Angular routing for SPA-like navigation.</li>
                    <li>Reusable services and components with TypeScript.</li>
                    <li>CRUD operations: Create, Read, Update, Delete game data.</li>
                    <li>MongoDB used as the primary data store.</li>
                    <li>Responsive design and intuitive UI layout.</li>
                  </ul>
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

export default GameIn
