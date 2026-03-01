import { Link } from "react-router"


function ErrorPage(){
    return(
        <div className="page-container">
            <h1>Error!!!</h1>
            <Link to='/'><button>HomePage</button></Link>
        </div>
    )
}

export default ErrorPage