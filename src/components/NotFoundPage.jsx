import { Link } from "react-router"


function NotFoundPage(){
    return(
        <div className="page-container">
            <h1>This is Page is Not Found</h1>
            <Link to='/'><button>HomePage</button></Link>
        </div>
    )
}

export default NotFoundPage