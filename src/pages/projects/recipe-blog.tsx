import PageHeader from "@components/sections/blog/pageHeader"

const RecipeBlog = () => {
  return (
    <main>
      <PageHeader title="The Recipe Journal" subtitle="Next.js + Contentful Project" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="single-blog-post-details wow fadeInDown"
                data-wow-delay="0.2s"
              >
                {/* Hero */}
                <div className="py-10">
                  <img
                    src="/images/projects/recipe-hero.png"
                    className="img-responsive mb-4 rounded"
                    alt="The Recipe Journal – Project Hero"
                  />
                </div>

                {/* Intro */}
                <div className="py-10">
                  <h4>📖 Introduction</h4>
                  <p>
                    <strong>The Recipe Journal</strong> is a modern web app built with{" "}
                    <strong>Next.js</strong> and powered by <strong>Contentful</strong> as a
                    headless CMS. It was created to showcase dynamic content fetching, SEO
                    optimization, and a clean UI for browsing and exploring recipes.
                  </p>
                  <p>
                    Users can browse a list of recipes, view detailed pages with cooking
                    instructions, and enjoy a responsive experience optimized with Next.js
                    features like <em>getStaticProps</em> and <em>getStaticPaths</em>.
                  </p>
                  <p>
                    <a
                      href="https://github.com/Zhoha28/Recipies-Blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>{" "}
                    •{" "}
                    <a
                      href="https://the-recipe-journal.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </p>
                </div>

                {/* Features */}
                <div className="py-10">
                  <h4>✨ Features & Functionality</h4>
                  <ul className="custom-list mb-4">
                    <li>Recipe listing page pulling content dynamically from Contentful.</li>
                    <li>Individual recipe detail pages with cooking time, ingredients, and method.</li>
                    <li>SEO-friendly setup with dynamic meta tags and Open Graph support.</li>
                    <li>Responsive card grid with optimized images using Next.js Image component.</li>
                    <li>Skeleton loaders for a smooth loading state.</li>
                    <li>Deployment on Vercel with ISR (Incremental Static Regeneration).</li>
                  </ul>
                </div>

                {/* Gallery */}
                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4">
                    <div className="col-6 ">
                      <img
                        src="/images/projects/recipe1.png"
                        alt="The Recipe Journal – Recipe Grid"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6 ">
                      <img
                        src="/images/projects/recipe2.png"
                        alt="The Recipe Journal – Recipe Card"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6 ">
                      <img
                        src="/images/projects/recipe3.png"
                        alt="The Recipe Journal – Recipe Detail"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                    <div className="col-6 ">
                      <img
                        src="/images/projects/recipe4.png"
                        alt="The Recipe Journal – Ingredients Section"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
           
                  </div>
                </div>

                {/* Tech stack */}
                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">Next.js</a>
                    <a href="#">React</a>
                    <a href="#">Contentful</a>
                    <a href="#">Vercel</a>
                    <a href="#">CSS</a>
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

export default RecipeBlog