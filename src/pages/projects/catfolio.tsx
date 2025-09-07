import PageHeader from "@components/sections/blog/pageHeader";

const Catfolio = () => {
  return (
    <main>
      <PageHeader title="Catfolio" subtitle="Next.js + Contentful — Cat Breeds Explorer" />

      <section className="blog-category section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="single-blog-post-details wow fadeInDown"
                data-wow-delay="0.2s"
              >
                {/* Hero image */}
                <div className="py-10">
                  <img
                    src="/images/projects/cats2.jpg"
                    className="img-responsive mb-4 rounded"
                    alt="Catfolio"
                    style={{ "objectPosition" : "center", }}
                  />
                </div>

                {/* Intro */}
                <div className="py-10">
                  <h4>🐾 Introduction</h4>
                  <p>
                    <strong>Catfolio</strong> (Catpedia) is a modern, content-driven web app that
                    lets users explore cat breeds with rich details, crisp imagery,
                    and a smooth UI. It’s built with the <strong>Next.js App Router</strong>,{" "}
                    <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, powered by{" "}
                    <strong>Contentful</strong> as the CMS.
                  </p>
                  <p>
                    The app uses server components, ISR, and dynamic routes to deliver
                    fast, SEO-friendly breed pages sourced from structured Contentful entries.
                  </p>
                  <p>
                    <a
                      href="https://catfolio-ruddy.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Website
                    </a>{" "}
                    –{" "}
                    <a
                      href="https://github.com/Zhoha28/catfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </p>
                </div>

                {/* Scope */}
                <div className="py-10">
                  <h4>🧩 Project Scope</h4>
                  <p>
                    Users can browse a catalog of breeds, open a dedicated page for each breed,
                    and view quick facts, a rich “about” section, and an image gallery.
                    Content authors manage everything in Contentful using a clean content model
                    with validations for fields like size, grooming level, lifespan, and temperament.
                  </p>
                  <p>
                    The frontend consumes Contentful via the Delivery API, renders Rich Text content,
                    and resolves linked assets/entries with a friendly UI and responsive layout.
                  </p>
                </div>

                {/* Features */}
                <div className="py-10">
                  <h4>🚀 Features</h4>
                  <ul className="custom-list mb-4">
                    <li>Next.js <strong>App Router</strong> with server components & ISR.</li>
                    <li>Dynamic routes: <code>/breeds/[slug]</code> with <code>generateStaticParams()</code>.</li>
                    <li>Contentful CMS: robust content model for cat breeds.</li>
                    <li>Rich Text rendering and image gallery (optimized with <code>next/image</code>).</li>
                    <li>Clean, responsive UI with Tailwind and subtle gradients.</li>
                    <li>Type-safe components with explicit prop typing.</li>
                  </ul>
                </div>

                {/* Gallery */}
                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <img
                        src="/images/projects/cats3.png"
                        alt="Catfolio – Breeds Listing"
                        className="img-fluid rounded shadow-sm"
                        style={{ "height": "100%", }}
                      />
                    </div>
                    <div className="col-md-6">
                      <img
                        src="/images/projects/cats5.png"
                        alt="Catfolio – Breed Detail Page"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">Next.js (App Router)</a>
                    <a href="#">TypeScript</a>
                    <a href="#">Tailwind CSS</a>
                    <a href="#">Contentful</a>
                    <a href="#">Rich Text Rendering</a>
                  </div>
                </div>

                {/* Highlights */}
                <div className="py-10">
                  <h5>✨ Implementation Highlights</h5>
                  <ul className="custom-list mb-4">
                    <li>
                      <strong>Contentful integration:</strong> typed helpers to safely resolve
                      asset URLs and render galleries.
                    </li>
                    <li>
                      <strong>Strong typing:</strong> lightweight prop types across UI components
                      (<code>Hero</code>, <code>QuickFacts</code>, <code>BreedsSidebar</code>,{" "}
                      <code>Gallery</code>, <code>Breadcrumbs</code>) to avoid “implicit any”.
                    </li>
                    <li>
                      <strong>App Router best practices:</strong> awaiting route <code>params</code> where needed,
                      static param generation, and incremental static regeneration.
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div className="py-10">
                  <h5>🔗 Links</h5>
                  <p className="mb-2">
                    <a
                      href="https://catfolio-ruddy.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Website
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/Zhoha28/catfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catfolio;