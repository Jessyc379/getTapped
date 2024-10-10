import React, { useEffect, useState } from "react";
import breweryService from "../../../services/brewery-service/BreweryService"; 
import brewerService from "../../../services/brewer-service/BrewerService"; 
import customerService from "../../../services/customer-service/CustomerService"; 
import { Brewery } from "../../../models/brewery/Brewery";
import { Brewer } from "../../../models/brewer/Brewer";
import { Customer } from "../../../models/customer/Customer";


const AdminPage = () => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [brewers, setBrewers] = useState<Brewer[]>([]);
    const [customers, setCustomers] = useState<Customer[]>([]);

    const [showBreweries, setShowBreweries] = useState(false);
    const [showBrewers, setShowBrewers] = useState(false);
    const [showCustomers, setShowCustomers] = useState(false);

    const [loadingBreweries, setLoadingBreweries] = useState(false);
    const [loadingBrewers, setLoadingBrewers] = useState(false);
    const [loadingCustomers, setLoadingCustomers] = useState(false);

    const [errorBreweries, setErrorBreweries] = useState<string | null>(null);
    const [errorBrewers, setErrorBrewers] = useState<string | null>(null);
    const [errorCustomers, setErrorCustomers] = useState<string | null>(null);
    

    // Fetch breweries when 'showBreweries' is toggled
    useEffect(() => {
        if (showBreweries) {
            const fetchBreweries = async () => {
                setLoadingBreweries(true);
                try {
                    const fetchedBreweries = await breweryService.getAllBreweries();
                    setBreweries(fetchedBreweries);
                    setErrorBreweries(null);
                } catch (error) {
                    setErrorBreweries("Error fetching breweries");
                } finally {
                    setLoadingBreweries(false);
                }
            };
            fetchBreweries();
        }
    }, [showBreweries]);

    // Fetch brewers when 'showBrewers' is toggled
    useEffect(() => {
        if (showBrewers) {
            const fetchBrewers = async () => {
                setLoadingBrewers(true);
                try {
                    const fetchedBrewers = await brewerService.getBrewers();
                    setBrewers(fetchedBrewers);
                    setErrorBrewers(null);
                } catch (error) {
                    setErrorBrewers("Error fetching brewers");
                } finally {
                    setLoadingBrewers(false);
                }
            };
            fetchBrewers();
        }
    }, [showBrewers]);

    // Fetch customers when 'showCustomers' is toggled
    useEffect(() => {
        if (showCustomers) {
            const fetchCustomers = async () => {
                setLoadingCustomers(true);
                try {
                    const fetchedCustomers = await customerService.getCustomers();
                    setCustomers(fetchedCustomers); 
                    setErrorCustomers(null);
                } catch (error) {
                    setErrorCustomers("Error fetching customers");
                } finally {
                    setLoadingCustomers(false);
                }
            };
            fetchCustomers();
        }
    }, [showCustomers]);

    // Toggle visibility functions
    const handleShowBreweries = () => {
        setShowBreweries((prev) => !prev);
    };

    const handleShowBrewers = () => {
        setShowBrewers((prev) => !prev);
    };

    const handleShowCustomers = () => {
        setShowCustomers((prev) => !prev);
    };

    return (
        <div className="container">
            {/* Manage Breweries Section */}
            <div className="card form-control text-center p-4 mt-3">
                <h4>Manage Breweries:</h4>
                <button className="btn btn-outline-success mt-2" onClick={handleShowBreweries}>
                    {showBreweries ? "Hide All Breweries" : "View All Breweries"}
                </button>
            </div>
            {/* Display Breweries */}
            {showBreweries && (
                <div className="card form-control mt-3">
                    <h4>All Breweries</h4>
                    {loadingBreweries ? (
                        <p>Loading breweries...</p>
                    ) : errorBreweries ? (
                        <p>{errorBreweries}</p>
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

            {/* Manage Brewers Section */}
            <div className="card form-control text-center p-4 mt-3">
                <h4>Manage Brewers:</h4>
                <button className="btn btn-outline-success mt-2" onClick={handleShowBrewers}>
                    {showBrewers ? "Hide All Brewers" : "View All Brewers"}
                </button>
            </div>
            {/* Display Brewers */}
            {showBrewers && (
                <div className="card form-control mt-3">
                    <h4>All Brewers</h4>
                    {loadingBrewers ? (
                        <p>Loading brewers...</p>
                    ) : errorBrewers ? (
                        <p>{errorBrewers}</p>
                    ) : (
                        <ul>
                            {brewers.map((brewer) => (
                                <li key={brewer.brewerId}>
                                    {brewer.breweriesOwned}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {/* Manage Customers Section */}
            <div className="card form-control text-center p-4 mt-3">
                <h4>Manage Customers:</h4>
                <button className="btn btn-outline-success mt-2" onClick={handleShowCustomers}>
                    {showCustomers ? "Hide All Customers" : "View All Customers"}
                </button>
            </div>
            {/* Display Customers */}
            {showCustomers && (
                <div className="card form-control mt-3">
                    <h4>All Customers</h4>
                    {loadingCustomers ? (
                        <p>Loading customers...</p>
                    ) : errorCustomers ? (
                        <p>{errorCustomers}</p>
                    ) : (
                        <ul>
                            {customers.map((customer) => (
                                <li key={customer.customerId}>
                                    {customer.favoriteBreweries} - {customer.totalReviews}
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
