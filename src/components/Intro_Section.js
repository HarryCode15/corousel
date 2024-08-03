import clutster from "../images/photo_cluser.png"

export default function Intro_Section(){
    return(
        <section className="intro">
            <img src={clutster} alt="Cluster" className="intro-img" />
            <h1 className="intro-header">Online Experiences</h1>
            <p className="intro-description">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}