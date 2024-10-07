import { useContext } from "react";
import { Link } from "react-router-dom";

import { BreweryContext } from '../../../contexts/brewery-context/BreweryContext';
import { Brewery } from '../../../models/brewery/Brewery';

export default function BreweryList() {

    const context = useContext(BreweryContext) 

    if (!context) {
        throw new Error('BreweryList must be used within an BreweriesContextProvider');
    }

    const { breweries } = context;

    return (
        <>
        <h4>Breweries List</h4>
        <Link className="btn btn-success" to="/breweries/add">Add</Link>
        <ul>
            {
                breweries.map((brewery: Brewery) => (
                    <li key={brewery.breweryId}><Link to={`/breweries/${brewery.breweryId}`}>{brewery.breweryName}</Link></li>
                ))
            }
        </ul>
        </>
    )
}