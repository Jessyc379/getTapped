import { useContext } from "react";
import { Link } from "react-router-dom";
import { BreweryContext } from '../../../contexts/brewery-context/BreweryContext';
import { Brewery } from '../../../models/brewery/Brewery';
import './BreweryList.css';
import breweryImage from '../../../assets/images/brewery-page.jpg';

export default function BreweryList() {
    const context = useContext(BreweryContext);

    if (!context) {
        throw new Error('BreweryList must be used within a BreweryContextProvider');
    }

    const { breweries } = context;

    return (
        <>
            <div className="breweries-hero-section">
                <img src={breweryImage} alt="Brewery" className="brewery-hero-image" />
                <div className="brewery-hero-text-overlay">
                    <h1>Welcome to the Breweries</h1>
                    <p>Explore some of the best breweries in the world!</p>
                </div>
            </div>

            <div className="brewery-card-container">
                <ul className="brewery-list">
                    {breweries.map((brewery: Brewery) => (
                        <li key={brewery.breweryId} className="brewery-card">
                            <div className="brewery-card-content">
                                <h3>{brewery.breweryName}</h3>
                                <p>{brewery.city}, {brewery.stateProvince}</p>
                                <Link to={`/breweries/${brewery.breweryId}`} className="view-details-link">
                                    View Details
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
