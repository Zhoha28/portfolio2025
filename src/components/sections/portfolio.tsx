import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@components/ui/sectionTitle";
import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "@utils/fackData/portfolioData"; // make sure each item has `categories: string[]`
import SlideUp from "@utils/animations/slideUp";

type Project = {
  id: number;
  title: string;
  img: string;
  link: string;
  categories: string[]; // <— changed from `category: string`
};

const animations = [
  { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, // Fade
  { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 50, opacity: 0 } }, // Slide
  { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.9, opacity: 0 } }, // Scale
];

const CATEGORY_PRIORITY = ["next.js", "mern", "mean", "cms", "other"]; // desired order

const normalize = (s: string) => s.trim().toLowerCase();
const titleCase = (s: string) => s.replace(/\w\S*/g, (t) => t[0].toUpperCase() + t.slice(1).toLowerCase());

const Portfolio = () => {
  const [data, setData] = useState<Project[]>(portfolioData as Project[]);
  const [filterData, setFilterData] = useState<Project[]>(portfolioData as Project[]);
  const [activeTab, setActiveTab] = useState<string>("show all");
  const [animation, setAnimation] = useState(animations[0]);

  // Build category list from data, dedupe, sort by priority then alpha
  const categories = useMemo(() => {
    const set = new Set<string>();
    (data || []).forEach((p) => (p.categories || []).forEach((c) => set.add(normalize(c))));
    const arr = Array.from(set);

    arr.sort((a, b) => {
      const ai = CATEGORY_PRIORITY.indexOf(a);
      const bi = CATEGORY_PRIORITY.indexOf(b);
      if (ai !== -1 && bi !== -1) return ai - bi;        // both prioritized
      if (ai !== -1) return -1;                          // a prioritized first
      if (bi !== -1) return 1;                           // b prioritized first
      return a.localeCompare(b);                         // fallback alpha
    });

    return ["show all", ...arr];
  }, [data]);

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    setAnimation(animations[Math.floor(Math.random() * animations.length)]);

    if (tab === "show all") {
      setFilterData(data);
    } else {
      const tabNorm = normalize(tab);
      const filtered = data.filter((p) => (p.categories || []).some((c) => normalize(c) === tabNorm));
      setFilterData(filtered);
    }
  };

  useEffect(() => {
    setData(portfolioData as Project[]);
    setFilterData(portfolioData as Project[]);
  }, []);

  return (
    <section id="portfolio" className="projects-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <SectionTitle className="text-center mb-60">
              <SectionTitle.Name>Projects</SectionTitle.Name>
              <SectionTitle.Title>
                Check out some of my <span>recent projects</span>
              </SectionTitle.Title>
            </SectionTitle>
          </div>
        </div>

        <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-1s">
          {categories.map((c, i) => (
            <li
              key={i}
              onClick={() => handleTabSelect(c)}
              className={`${activeTab === c ? "current" : ""} text-capitalize`}
              role="button"
              aria-pressed={activeTab === c}
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleTabSelect(c)}
            >
              {c === "show all" ? "Show All" : titleCase(c)}
            </li>
          ))}
        </ul>

        <div className="row project-masonry-active">
          <AnimatePresence mode="wait">
            {filterData.map((p) => (
              <motion.div
                key={p.id}
                {...animation}
                transition={{ duration: 0.4 }}
                className="col-lg-4 col-md-6 item"
              >
                <Card
                  id={p.id}
                  img={p.img}
                  title={p.title}
                  categories={p.categories}
                  link={p.link}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

type CardPropsType = {
  title: string;
  img: string;
  categories: string[];
  id: number;
  link: string;
};

const Card = ({ img, title, categories, id, link }: CardPropsType) => {
  return (
    <SlideUp delay={id}>
      <div className="project-item style-two wow fadeInUp delay-0-2s">
        <div className="project-image">
          <img src={img} alt={title} />
          <a href={link} className="details-btn" aria-label={`Open ${title}`}>
            <i className="far fa-arrow-right" />
          </a>
        </div>
        <div className="project-content">
          <span className="sub-title">
            {categories?.map(titleCase).join(", ")}
          </span>
          <h3>
            <a href={link}>{title}</a>
          </h3>
        </div>
      </div>
    </SlideUp>
  );
};