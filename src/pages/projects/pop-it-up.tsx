import PageHeader from "@components/sections/blog/pageHeader"

const PopItUp = () => {
  return (
    <main>
      <PageHeader title="POP IT UP" subtitle="Android App in Java" />

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
                    src="/images/projects/pop.jpeg"
                    className="img-responsive mb-4 rounded"
                    alt="Pop It Up"
                  />
                </div>

                <div className="py-10">
                  <h4>📱 Introduction</h4>
                  <p>
                    <strong>POP IT UP</strong> is a mobile e-commerce application built using Java for Android as the final project of the Android Development course.
                  </p>
                  <p>
                    The app simulates a shopping platform that lets users browse products, view item details, and interact with the UI via Android components like Intents and Fragments.
                  </p>
                  <p>
                    <a href="#" target="_blank" rel="noopener noreferrer">View Code</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>🛒 Features & Functionality</h4>
                  <ul className="custom-list mb-4">
                    <li>Uses List Fragments for dynamic product listings.</li>
                    <li>Implements Intents for navigation between activities.</li>
                    <li>Allows user input and basic form handling.</li>
                    <li>Product cards are clickable with transitions to product detail screens.</li>
                    <li>Clean UI for shopping experience simulation.</li>
                  </ul>
                </div>

            <div className="py-10">
  <h4 className="mb-4">📸 Gallery</h4>
  <div className="row g-4">
    <div className="col-6 col-md-4">
      <img
        src="/images/projects/pop1.png"
        alt="POP IT UP Screenshot 1"
        className="img-fluid rounded shadow-sm"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        src="/images/projects/pop2.png"
        alt="POP IT UP Screenshot 2"
        className="img-fluid rounded shadow-sm"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        src="/images/projects/pop3.png"
        alt="POP IT UP Screenshot 3"
        className="img-fluid rounded shadow-sm"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        src="/images/projects/pop4.png"
        alt="POP IT UP Screenshot 4"
        className="img-fluid rounded shadow-sm"
      />
    </div>
    <div className="col-6 col-md-4">
      <img
        src="/images/projects/pop5.png"
        alt="POP IT UP Screenshot 5"
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
                    <a href="#">XML</a>
                    <a href="#">Intents</a>
                    <a href="#">Fragments</a>
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

export default PopItUp
