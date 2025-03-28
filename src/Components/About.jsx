//images
import image from "../assets/llander-arroz.png"

function About() {
    return (
        <>
        <section id="about">
            <div className="about-container container">
                <div className="about-left-section">
                    <img className="about-img" src={image} alt="" />
                </div>
                <div className="about-right-section">
                    <div className="about-content">
                        <p className="about-topper topper">About Me</p>
                        <h2 className="about-title title">Llander Arroz</h2>
                        <p className="about-text text">
                        A 2nd-year IT student passionate about web development and problem-solving. 
                        I enjoy building interactive web applications and exploring new technologies. 
                        Currently, I'm honing my skills in JavaScript, React, and Python. 
                        I love taking on new challenges, contributing to open-source projects, and collaborating with like-minded developers. 
                        Looking forward to growing my expertise and making an impact in the tech industry!
                        </p>
                    </div>
                    <div className="education">
                        <p className="education-title">Education:</p>
                        <p className="education-text text"><span className="highlight">Bachelor Science in Information Technology (BSIT)</span></p>
                        <p className="education-text text"><span className="highlight">Westen Institue of Technology</span>, Iloilo, Philippines (2023 - 2027 [Expected])</p>
                        <p className="education-text text"><span className="highlight">Relevant Coursess</span>: Integrative Programming, Data Science, Networking</p>
                        <p className="education-text text"><span className="highlight">Achievements</span>: Academic Scholarship, Westen Institue of Technology(2nd Sem, 2024-2025)</p>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default About