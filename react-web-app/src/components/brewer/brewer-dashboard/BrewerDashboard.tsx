import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Brewery } from "../../../models/brewery/Brewery";
import brewerService from "../../../services/brewer-service/BrewerService";
import breweryService from "../../../services/brewery-service/BreweryService";
import { BrewerContext } from "../../../contexts/brewer-context/BrewerContext";
import { BreweryContext } from "../../../contexts/brewery-context/BreweryContext";
import { Brewer } from "../../../models/brewer/Brewer";
import { Brewery } from "../../../models/brewery/Brewery";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";



export default function BrewerDashboard() {

    const { isAuthenticated, user } = useSelector((state: RootState) => state.authentication)

    const context = useContext(BreweryContext);
    const { breweries, fetchBreweries } = useContext(BreweryContext)
    const { brewer, getBrewer } = useContext(BrewerContext)




    if (!context) {
        throw new Error('Sorry, this is not within the BrewerContextProvider')
    }

    console.log(breweries);


    // const breweriesOwned = breweries.filter(b => b.brewerId == +(user?.brewerId??0))[0]

    return (

        <>
            <h2>Brewer Dashboard</h2>
            <div className="container">
                <Link to={`${user?.brewerId}`} className="card form-control">View My Profile </Link>
                <div className="card form-control mt-3">
                    <h4> My Breweries: </h4>
                    {/* {breweriesOwned.map((brewery:Brewery)=>(
                        <li key={brewery.brewerId}>
                            <Link to={`/${brewery.brewerId}/edit`}>{brewery.breweryName}</Link>
                        </li>
                    ))

                    } */}
                    {breweries.map((brewery: Brewery) => (
                        <li key={brewery.brewerId}>
                            <Link to={`/${brewery.breweryId}/edit`}>{brewery.breweryName}</Link>
                        </li>
                    ))}

                    <Link to={"/brewers/add"} className="btn btn-outline-success mt-2">Add Brewery</Link>

                </div>

            </div>


        </>
    )
}