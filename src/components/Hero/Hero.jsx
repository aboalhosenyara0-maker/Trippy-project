import './Hero.css'

const Hero = ({bgImage , title , description , btnText}) => {
    return (
        <div className='hero' style={{backgroundImage : `url(${bgImage})`}}>
            <h1>{title}</h1>
            <p>{description}</p>
            {btnText && <button>{btnText}</button>}
        </div>
    )
}

export default Hero
