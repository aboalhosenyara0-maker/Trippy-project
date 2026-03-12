import Social from '../Social/Social'
import './Footer.css'


const Footer = ({trippy , des }) => {
    return (
        <footer>
        <div className="Trippy">
            <div className="title">
                <h1>{trippy}</h1>
                <p>{des}</p>
            </div>
            <div className="social">
                <div className="facbook"><img src="/assets/img/facebook.svg" alt="" /></div>
                <div className="facbook"><img src="/assets/img/instagram.svg" alt="" /></div>
                <div className="facbook"><img src="/assets/img/Be.svg" alt="" /></div>
                <div className="facbook"><img src="/assets/img/twitter.svg" alt="" /></div>
            </div>
        </div>
        <Social
        title ="Project"
        title2="Community"
        title3="Help"
        title4="Others"
        />
        </footer>
    )
}

export default Footer
