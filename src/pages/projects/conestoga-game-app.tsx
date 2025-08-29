import PageHeader from "@components/sections/blog/pageHeader"

const ConestogaGameApp = () => {
  return (
    <main>
      <PageHeader title="Conestoga Gaming Club" subtitle="ANDROID / JAVA" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="single-blog-post-details wow fadeInDown" data-wow-delay="0.2s">

                <div className="py-10">
                  <img
                    src="/images/projects/games2.jpeg"
                    className="img-responsive mb-4 rounded"
                    alt="Conestoga Gaming App"
                  />
                </div>

                <div className="py-10">
                  <h4>1. Introduction</h4>
                  <p>
                    <strong>Conestoga Gaming Club</strong> is an Android-based e-commerce demo app built during the Android Development course.
                  </p>
                  <p>
                    The app allows users to browse, view, and explore a catalog of games for sale. It features Android concepts like list fragments, activity navigation, and basic Firebase integration.
                  </p>
                  <p>
                    LINK – <a href="#" target="_blank" rel="noopener noreferrer">View Code</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>2. Features</h4>
                  <ul className="custom-list mb-4">
                    <li>List fragments to display game inventory</li>
                    <li>Intent-based navigation between product pages</li>
                    <li>Form validation and input collection</li>
                    <li>Firebase for backend data operations</li>
                    <li>Splash screen and interactive UI elements</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4">
                    <div className="col-6 col-md-3">
                      <img
                        src="/images/projects/cg1.png"
                        alt="Gaming App Screenshot 1"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6 col-md-3">
                      <img
                        src="/images/projects/cg2.png"
                        alt="Gaming App Screenshot 2"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6 col-md-3">
                      <img
                        src="/images/projects/cg3.png"
                        alt="Gaming App Screenshot 3"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6 col-md-3">
                      <img
                        src="/images/projects/cg4.png"
                        alt="Gaming App Screenshot 4"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">Java</a>
                    <a href="#">Android Studio</a>
                    <a href="#">Firebase</a>
                    <a href="#">XML</a>
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

export default ConestogaGameApp
