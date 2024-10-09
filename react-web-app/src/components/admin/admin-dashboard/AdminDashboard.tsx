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

            <Link to={"/brewery/view"} className="btn btn-outline-success mt-2">View All</Link>
            <Link to={"/brewery/manage"} className="btn btn-outline-success mt-2">Manager Breweries</Link>
            




            <div className="card form-control mt-3">
                <h4>Manage Brewers: </h4>
                
                <Link to={"/admin/view-brewer"} className="btn btn-outline-success mt-2">View All</Link>
                <Link to={"/admin/manage-brewer"} className="btn btn-outline-success mt-2">Edit </Link>
                
        </div>

        </div>
        

</>
