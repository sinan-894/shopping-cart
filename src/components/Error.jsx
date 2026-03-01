import { Link } from "react-router"


function ErrorPage(){
    return(
        <div className="error-container">
            Error!!!
            <Link to='/'><button>HomePage</button></Link>
        </div>
    )
}

export default ErrorPage