// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Brewery } from "../../../models/brewery/Brewery";
// import breweryService from "../../../services/brewery-service/BreweryService";
// import brewerService from "../../../services/brewer-service/BrewerService";



export default function BrewerDashboard() {
    // const [breweries, setBreweries] = useState<Brewery[]>([]);

    // useEffect(() => {loadBreweries() },[])

    // async function loadBreweries();
    // {
    //     const breweries = await brewerService.getBreweriesByBrewerId();
    // }



    return (

        <>
            <h2>Brewer Dashboard</h2>
            <div className="container">
                <Link to={"/brewers/profile"} className="card form-control">View My Profile </Link>
                <div className="card form-control mt-3">
                    <h4> My Breweries: </h4>

                    <Link to={"/brewers/add"} className="btn btn-outline-success mt-2">Add Brewery</Link>

                </div>
                
            </div>


        </>
    )
}