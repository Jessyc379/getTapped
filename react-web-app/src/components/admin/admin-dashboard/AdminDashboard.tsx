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
            
            <Link to={"/brewery/edit"} className="btn btn-outline-success mt-2">Edit</Link>
            <Link to={"/admin/delete-brewery"} className="btn btn-outline-success mt-2">Delete</Link>



            <div className="card form-control mt-3">
                <h4>Manage Brewers: </h4>
                
                <Link to={"/admin/edit-brewer"} className="btn btn-outline-success mt-2">Edit </Link>
                <Link to={"/admin/delete-brewer"} className="btn btn-outline-success mt-2">Delete </Link>
            </div>
        </div>

        </div>
        

</>
    )
}