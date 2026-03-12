import './Social.css'

const Social = ({title , title2 , title3 , title4}) => {
    return (
        <div className="parts">
            <div className="part1">
                <h4>{title}</h4>
                    <ul>
                        <li>Changelog</li>
                        <li>Status</li>
                        <li>License</li>
                        <li>All Versions</li>
                    </ul>
            </div>
            <div className="part2">
                <h4>{title2}</h4>
                    <ul>
                        <li>GitHub</li>
                        <li>Issues</li>
                        <li>Project</li>
                        <li>Twitter</li>
                    </ul>
            </div>
            <div className="part3">
                <h4>{title3}</h4>
                    <ul>
                        <li>Support</li>
                        <li>Troubleshooting</li>
                        <li>Contact us</li>
                    </ul>
            </div>
            <div className="part4">
                <h4>{title4}</h4>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>License</li>
                    </ul>
            </div>
        </div>
    )
}

export default Social
