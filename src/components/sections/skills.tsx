import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"
import { skillsData } from "@utils/fackData/skillsData"

const Skills = () => {
    return (
        <section id="skills" className="skill-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <SectionTitle className="text-center mb-60">
                            <SectionTitle.Name>Skills that pay the bills</SectionTitle.Name>
                            <SectionTitle.Title>My <span>Technical </span> Competencies</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="skill-items-wrap">
                            <div className="row">
                                {skillsData.map(({ id, img, progress, title }) =>
                                    <Card key={id} img={img} progress={progress} title={title} id={id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skills

type CardPropsType = {
    title: string,
    progress: string,
    img: string,
    id: number
}
const Card = ({ title, id }: CardPropsType) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
            <SlideUp delay={id}>
                <div className="skill-item">
                    {/* <img src={img} alt="Skill" /> */}
                    <h5>{title}</h5>
                    {/* <span className="percent">{progress}</span> */}
                </div>
            </SlideUp>
        </div>
    )
}