import React, { useEffect, useState } from "react";
import breweryService from "../../../services/brewery-service/BreweryService"; 
import { Brewery } from "../../../models/brewery/Brewery";

const AdminPage = () => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);



    const [showBreweries, setShowBreweries] = useState(false);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // fetch all breweries when 'showBreweries' is toggled
    useEffect(() => {
        if (showBreweries) {
            const fetchBreweries = async () => {
                try {
                    const fetchedBreweries = await breweryService.getAllBreweries();
                    setBreweries(fetchedBreweries);
                    setLoading(false);
                } catch (error) {
                    setError("Error fetching breweries");
                    setLoading(false);
                }
            };

            fetchBreweries();
        }
    }, [showBreweries]);

    // Function to toggle brewery visibility
    const handleShowBreweries = () => {
        setShowBreweries((prev) => !prev);
    };

    return (
        <div className="container">

            {/* Manage Breweries Section */}
            <div className="card form-control text-center p-4 mt-3">
                <h4>Manage Breweries:</h4>

                {/* Toggle visibility of breweries */}
                <button className="btn btn-outline-success mt-2" onClick={handleShowBreweries}>
                    {showBreweries ? "Hide All Breweries" : "View All Breweries"}
                </button>
            </div>

            {/* Display Breweries */}
            {showBreweries && (
                <div className="card form-control mt-3">
                    <h4>All Breweries</h4>
                    {loading ? (
                        <p>Loading breweries...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <ul>
                            {breweries.map((brewery) => (
                                <li key={brewery.breweryId}>
                                    {brewery.breweryName} - {brewery.city}, {brewery.stateProvince}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminPage;
