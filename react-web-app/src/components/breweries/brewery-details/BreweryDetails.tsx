import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BreweryContext } from '../../../contexts/brewery-context/BreweryContext';

export default function BreweryDetails() {
    const { breweryId } = useParams(); 
    const context = useContext(BreweryContext);

    if (!context) {
        return <div>Error: Brewery context is not available</div>;
    }

    const { breweries } = context;
    const brewery = breweries.find(b => b.breweryId === breweryId);

    if (!brewery) {
        return <div>Brewery not found</div>;
    }

    return (
        <div>
            <h2>{brewery.breweryName}</h2>
            <p>Type: {brewery.breweryType}</p>
            <p>Address: {brewery.address}, {brewery.city}, {brewery.stateProvince}</p>
            <p>Phone: {brewery.phone}</p>
            <p>Website: <a href={brewery.websiteUrl}>{brewery.websiteUrl}</a></p>
        </div>
    );
}
