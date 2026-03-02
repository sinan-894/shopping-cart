import { Link } from "react-router"



function HomePage(){
    return(
        <div className="page-container">
            <h1>Welcome ! !</h1>
            <Link to='/shop'><button>Shop Page</button></Link>
            
        </div>
    )
}


export default HomePage