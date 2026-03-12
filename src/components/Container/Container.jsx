import './Container.css'

const Container = ({children , reverse}) => {
    return (
        <div className={`container ${reverse ? "reverse" : ""}`}>
            {children}
        </div>
    )
}

export default Container
