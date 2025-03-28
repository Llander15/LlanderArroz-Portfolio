//images
import codigoSample from "../assets/codigo-sample.png"
//card
function ProjectCard({ image, alt, title, description, role, url }) {
    return(
        <>
        <div className="project-card">
            <div className="project-img-container">
                <img className="project-img" src={image} alt={alt} />
            </div>
            <h3 className="project-card-title">
            {title}
            </h3>
            <p className="project-card-description">
            {description}
            </p>
            <p className="project-card-role">
            Role: {role}
            </p>
            <a className="visit-project-btn" href={url} target="_blank">Visit</a>
        </div>
        </>
    )
}
function Projects() {
    //function to call a card
    const displayCard = (image, alt, title, description, role, url) =>{
        return <ProjectCard image={image} alt={alt} title={title} description={description} role={role} url={url} />;
    };
    return (
        <>
        <section id="projects">
            <div className="projects-container container">
                <h2 className="projects-title title">Projects</h2>
                <div className="project-list">
                    {displayCard( 
                        codigoSample, 
                        "codigo", 
                        "Codigo", 
                        "Java language typing Web game with a fantasy based design.", 
                        "Backend Developer",
                        "/#projects"
                    )}
                </div>
            </div>
        </section>
        </>
    )
}
export default Projects