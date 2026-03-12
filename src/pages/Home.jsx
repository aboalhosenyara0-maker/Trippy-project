import Container from "../components/Container/Container"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Cards from "../components/section/Cards"
import Section from "../components/section/section"
import Title from "../components/Title/Title"


const Home = () => {
    const containers = [
        {
            title : "Mt. Daguldul, Batangas",
            descriptions : "One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!",
            firstImag : "/assets/img/1.jpg",
            secImag : "/assets/img/2.jpg"
        },
        {
            title : "Taal Volcano, Batangas",
            descriptions : "A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total.",
            firstImag : "/assets/img/3.jpg",
            secImag : "/assets/img/4.jpg",
            reverse : true
        }
    ]
    return (
        <div>
        <Hero
        bgImage = "/assets/img/Herobg.jpg"
        title = "Your Journey Your Story"
        description = "Choose Your Favourite Destination."
        btnText="Travel Now"
        />
        <Section>
            <Title
            title="Popular Destinations"
            subTitle="Tours dive you the opportunity to see a lot, within a time frame."
            />
            {
                containers.map((container , index) => {
                    return(
                        <Container key={index} reverse={container.reverse}>
                            <div className="text">
                                <h2>{container.title}</h2>
                                <p>{container.descriptions}</p>
                            </div>
                            <div className="imags">
                                <img src={container.firstImag} alt="" />
                                <img src={container.secImag} alt="" />
                            </div>
                        </Container>
                    )
                })
            }
            <Title
            title="Recent Trips"
            subTitle ="You can discover unique destination using Google Maps."
            />
            <Cards/>
        </Section>
        </div>
    )
}

export default Home
