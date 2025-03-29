//images
import figmaLogo from "../assets/figma-logo.png"
import expressLogo from "../assets/express-logo.png"
import mongodbLogo from "../assets/mongodb-logo.png"
import reactLogo from "../assets/react-logo.png"
import nodeLogo from "../assets/node-logo.png"
import javaLogo from "../assets/java-logo.png"
//Card
function TechCard({image, alt, title}) {
    return(
        <>
        <div className="tech-card">
            <div className="tech-img-container">
                <img className="tech-img" src={image} alt={alt} />
            </div>
            <h2 className="tech-card-title">{title}</h2>
        </div>
        </>
    )
}

function Tech() {
    //function to call a card
    const displayCard = (image, alt, title) =>{
        return <TechCard image={image} alt={alt} title={title} />;
    };
    return (
        <>
        <section id="tech">
            <div className="tech-container container"> 
                <h2 className="tech-title title">Tech Stack</h2>
                <div className="tech-lists">
                    <div className="tech-lists-by-2">
                        {displayCard( mongodbLogo, "mongodb", "MongoDB")}
                        {displayCard( expressLogo, "express", "Express.js")}
                    </div>
                    <div className="tech-lists-by-2">
                        {displayCard( reactLogo, "react", "React.js")}
                        {displayCard( nodeLogo, "node", "Node.js")}
                    </div>
                </div>
                <div className="tech-lists">
                    <div className="tech-lists-by-2">
                        {displayCard( javaLogo, "java", "Java")}
                        {displayCard( figmaLogo, "figam", "Figma")}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Tech