import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brewery } from "../../../models/brewery/Brewery";
import breweryService from "../../../services/brewery-service/BreweryService";



export default function BrewerDashboard() {
    const [breweries, setBreweries] = useState<Brewery[]>([]);

    // useEffect(() => {loadBreweries() },[])

    // async function loadBreweries();
    // {
    //     // const breweries = await breweryService.getBreweriesByBrewerId();
    // }



    return (

        <>
            <h2>Brewer Dashboard</h2>
            <Link to={"/brewer/profile"} className="card">Profile </Link> 
            <div className="card mt-3">
                <h4> My Breweries: </h4>

            </div>
            <Link to={"/brewery/add"} className="card">Add Brewery </Link> 

            
        </>
    )
}