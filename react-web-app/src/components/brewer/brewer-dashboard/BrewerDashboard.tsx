import { useContext } from "react";
import { Link } from "react-router-dom";
import { BreweryContext } from "../../../contexts/brewery-context/BreweryContext";
import { Brewery } from "../../../models/brewery/Brewery";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import brewerImage from '../../../assets/images/brewer-dashboard.jpg'
import './BrewerDashboard.css';
import { BrewerContext } from "../../../contexts/brewer-context/BrewerContext";
import { Brewer } from "../../../models/brewer/Brewer";


export default function BrewerDashboard() {

    const { isAuthenticated, user } = useSelector((state: RootState) => state.authentication)
    const brewerId = user?.brewerId
    


    const breweryContext = useContext(BreweryContext);
    if (!breweryContext) {
        throw new Error('Sorry, this is not within the BreweryContextProvider')
    }
    const { breweries, fetchBreweries } = breweryContext  

    // const brewerContext = useContext(BrewerContext);
    // if (!brewerContext) {
    //     throw new Error('Sorry, this is not within the BrewerContextProvider')
    // }
    // const { brewers, fetchBrewers } = brewerContext  
//
console.log('all breweries:',breweries);

    const breweriesOwned = breweries.filter((b: Brewery) => b.brewerId == +(brewerId??0))
    // const brewer = brewers.filter((b: Brewer) => b.brewerId == brewerId)
//
console.log('breweries owned:' , breweriesOwned);

    return (

        <>
        <div className="brewer-img">
            <img src={brewerImage} className="brewer-dash-img"/>
        </div>


            <div className="container mt-5">
                <h1>Welcome to the Brewer Dashboard, {user?.username}!</h1>
                <div className="card form-control">
                    <h4>Account information</h4>
                    <p><strong>User Id: </strong>{user?.id}</p>
                    <p><strong>Brewer Id: </strong>{user?.brewerId}</p>
                </div>
                <ul className="breweries-container form-control mt-3 ">
                    <h4> Your Breweries: </h4>
                    {breweriesOwned.map((brewery:Brewery)=>(
                        <li className="brewery-card form-control shadow p-3 mb-3 bg-white rounded" key={brewery.breweryId}>{brewery.breweryName} 
                            <Link to={`/brewers/${brewery.breweryId}/edit`} className="edit-btn">Edit Brewery</Link></li>
                       ))
                    }
                    <Link to={"/brewers/add"} className="btn btn-outline-success mt-2">Add Brewery</Link>

                </ul>

            </div>
        </>
    )
}