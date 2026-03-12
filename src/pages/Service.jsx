import Hero from "../components/Hero/Hero"
import Cards from "../components/section/Cards"
import Section from "../components/section/section"
import Title from "../components/Title/Title"


const Service = () => {
    return (
        <div>
        <Hero
        bgImage="/assets/img/pares.jpg"
        title="Services"
        />
        <Section>
            <Title
            title="Recent Trips"
            subTitle="You can discover unique destination using Google Maps."
            />
            <Cards/>
        </Section>
        </div>
    )
}

export default Service
