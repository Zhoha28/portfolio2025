import PageHeader from "@components/sections/blog/pageHeader";

const MovieMood = () => {
  return (
    <main>
      <PageHeader title="MovieMood" subtitle="React Movie Recommendation App" />

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
                    src="/images/projects/moviemood.png"
                    className="img-responsive mb-4 rounded"
                    alt="MovieMood"
                  />
                </div>

                <div className="py-10">
                  <h4>🎬 Introduction</h4>
                  <p>
                    <strong>MovieMood</strong> is a React-based web app that recommends movies based on your mood. It fetches movie data dynamically from TMDB API and lets users browse popular, trending, and genre-based movie lists.
                  </p>
                  <p>
                    The app uses React hooks, context for state management, and features smooth UI interactions with responsive design.
                  </p>
                  <p>
                    <a href="https://movie-mood-ruwg.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a> – <a href="https://github.com/Zhoha28/MovieMood" target="_blank" rel="noopener noreferrer">View Code</a>
                  </p>
                </div>

                <div className="py-10">
                  <h4>🧩 Project Scope</h4>
                  <p>
                    MovieMood allows users to search for movies by mood or category, view movie details, and get personalized recommendations. It supports multiple movie categories like Trending, Popular, and Genres.
                  </p>
                  <p>
                    The app integrates with TMDB API for real-time movie data and leverages React Router for seamless page navigation.
                  </p>
                </div>

                <div className="py-10">
                  <h4>🚀 Features</h4>
                  <ul className="custom-list mb-4">
                    <li>React functional components with hooks.</li>
                    <li>Movie browsing by moods, trending, and popular categories.</li>
                    <li>Movie detail pages with posters, ratings, and descriptions.</li>
                    <li>Responsive and intuitive UI/UX design.</li>
                    <li>Integration with The Movie Database (TMDB) API.</li>
                    <li>Client-side routing with React Router.</li>
                  </ul>
                </div>

                <div className="py-10">
                  <h4 className="mb-4">📸 Gallery</h4>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <img
                        src="/images/projects/mm1.png"
                        alt="MovieMood Screenshot 1 - Home Page"
                        className="img-fluid rounded shadow-sm"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        src="/images/projects/mm13.png"
                        alt="MovieMood Screenshot 2 - Movie List"
                        className="img-fluid rounded shadow-sm"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-md-4">
                      <img
                        src="/images/projects/mm12.png"
                        alt="MovieMood Screenshot 3 - Movie Details"
                        className="img-fluid rounded shadow-sm"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <h5>🛠️ Tech Stack</h5>
                  <div className="tag mb-5">
                    <a href="#">React</a>
                    <a href="#">JavaScript</a>
                    <a href="#">CSS</a>
                    <a href="#">TMDB API</a>
                    <a href="#">React Router</a>
                    <a href="#">Hooks</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieMood;
