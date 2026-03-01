import { Link } from "react-router"



function HomePage(){
    return(
        <div className="page-container">
            <h1>Welcome to the Website Name !!!</h1>
            <Link to='/shop'><button>Shop Page</button></Link>
            
        </div>
    )
}


export default HomePage