import { Link, useParams } from "react-router-dom"


export default function AdminDashboard()
{
    const params = useParams()


    return (
       
    <>
 
    <div className="container">
        <Link to={"/admin/profile"} className="card form-control text-center p-4">View My Admin Profile </Link>

        <div className="card form-control text-center p-4">
            <h4> Manage Breweries: </h4>
            
            <Link to={"/brewers/add"} className="btn btn-outline-success mt-2">Add Brewery</Link>


            <div className="card form-control mt-3">
                <h4>Manage Brewers: </h4>
                
                <Link to={"/admin/add-brewer"} className="btn btn-outline-success mt-2">Add Brewer</Link>
            </div>
        </div>

        </div>
        

</>
    )
}