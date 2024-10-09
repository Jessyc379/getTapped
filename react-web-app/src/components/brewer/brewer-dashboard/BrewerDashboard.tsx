import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BreweryContext } from "../../../contexts/brewery-context/BreweryContext";
import { Brewery } from "../../../models/brewery/Brewery";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";



export default function BrewerDashboard() {

    const { isAuthenticated, user } = useSelector((state: RootState) => state.authentication)
    const brewerId = user?.brewerId

    const { breweries, fetchBreweries } = useContext(BreweryContext)    
//
console.log('all breweries:',breweries);


    const context = useContext(BreweryContext);
    if (!context) {
        throw new Error('Sorry, this is not within the BrewerContextProvider')
    }

    const breweriesOwned = breweries.filter((b: Brewery) => b.brewerId == +(brewerId??0))
//
console.log('breweries owned:' , breweriesOwned);



    return (

        <>
            {/* <h2>Brewer Dashboard</h2> */}
            <div className="container mt-5">
                {/* <Link to={`${user?.brewerId}`} className="card form-control">View My Profile </Link> */}
                <h1>Welcome to the Brewer Dashboard, {user?.username}!</h1>
                <div className="card form-control">
                    <h4>Account information</h4>
                    <p><strong>User Id: </strong>{user?.id}</p>
                    <p><strong>Brewer Id: </strong>{user?.brewerId}</p>
                </div>
                <div className="breweries-container form-control mt-3">
                    <h4> Your Breweries: </h4>
                    {breweriesOwned.map((brewery:Brewery)=>(
                        <li className="card form-control" key={brewery.breweryId}>{brewery.breweryName} 
                            <Link to={`/brewers/${brewery.breweryId}/edit`}>Edit Brewery</Link></li>
                       ))
                    }
                    <Link to={"/brewers/add"} className="btn btn-outline-success mt-2">Add Brewery</Link>

                </div>

            </div>


        </>
    )
}