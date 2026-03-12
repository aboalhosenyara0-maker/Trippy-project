import Hero from "../components/Hero/Hero"
import Section from "../components/section/section"


const Contact = () => {
    return (
        <div>
        <Hero
        bgImage="/assets/img/4.jpg"
        title="Contact"
        />
        <Section>
            <div className="info">
                <h1>Send a message to us!</h1>
                <form action="">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Subject" />
                    <textarea name="" id="">Message</textarea>
                </form>
                <button className="btn">Send Message</button>
            </div>
        </Section>
        </div>
    )
}

export default Contact
