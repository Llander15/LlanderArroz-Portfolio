//images
import githubLogo from "../assets/github-logo.png"
function Footer() {
    return (
        <>
        <section id="footer">
            <div className="footer-container container">
                <div className="footer-left">
                    <h2>Llander Arroz</h2>
                    <div className="footer-socials">
                        <div className="social-link">
                            <a href="" target="_blank">
                                <img src={githubLogo} alt="facebook" className="footer-social-img" />
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="" target="_blank">
                                <img src={githubLogo} alt="github" className="footer-social-img" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-quick-links">
                        <h3 className="quick-link-title">Quick Links</h3>
                        <div className="quick-link-container">
                            <p><a href="/#hero" className="quick-link">Back to Top</a></p>
                            <p><a href="/#about" className="quick-link">About</a></p>
                            <p><a href="/#tech" className="quick-link">Tech Stack</a></p>
                            <p><a href="/#projects" className="quick-link">Projects</a></p>
                            <p><a href="/#contact" className="quick-link">Contact</a></p>
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Footer