import { Link } from "react-router"


function NotFoundPage(){
    return(
        <div className="error-container">
            This is Page is Not Found
            <Link to='/'><button>HomePage</button></Link>
        </div>
    )
}

export default NotFoundPage