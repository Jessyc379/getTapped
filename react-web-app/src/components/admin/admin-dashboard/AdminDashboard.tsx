import React from "react";
import { Link, useParams } from "react-router-dom";


const AdminPage = () => {
    const params = useParams();

    return (
    <div className="container">
        <Link to={"/admin/profile"} className="card form-control text-center p-4">View My Admin Profile </Link>

        <div className="card form-control text-center p-4" mt-3>
            <h4> Manage Breweries: </h4>

            <Link to={"/brewery/view"} className="btn btn-outline-success mt-2">View All</Link>
            <Link to={"/brewery/manage"} className="btn btn-outline-success mt-2">Manager Breweries</Link>
        </div>   
    
            <div className="card form-control mt-3">
                <h4>Manage Brewers: </h4>
                
                <Link to={"/admin/view-brewer"} className="btn btn-outline-success mt-2">View All</Link>
                <Link to={"/admin/manage-brewer"} className="btn btn-outline-success mt-2">Manage Brewers </Link>
                
        </div>
    </div>
    );

<<<<<<< Updated upstream
};
=======
   
}

>>>>>>> Stashed changes
export default AdminPage;
