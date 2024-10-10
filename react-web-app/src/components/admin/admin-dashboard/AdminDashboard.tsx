import React, { useEffect, useState } from "react";
import breweryService from "../../../services/brewery-service/BreweryService"; 
import brewerService from "../../../services/brewer-service/BrewerService"; 
import customerService from "../../../services/customer-service/CustomerService"; 
import { Brewery } from "../../../models/brewery/Brewery";
import {Brewer}    from "../../../models/brewer/Brewer";
import {Customer}    from "../../../models/customer/Customer";
 



const AdminPage = () => {
    const [breweries, setBreweries] = useState<Brewery[]>([]);
    const [brewers, setBrewers] = useState<Brewer[]>([]);
    const [customers, setCustomers] = useState<Customer[]>([]);

    const [showBreweries, setShowBreweries] = useState(false);
    const [showBrewers, setShowBrewers] = useState(false);
    const [showCustomers, setShowCustomers] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    useEffect(() => {
        if (showBrewers) {
            const fetchBrewers = async () => {
                try {
                    const fetchedBrewers = await brewerService.getBrewers();
                    setBrewers(fetchedBrewers);
                    setLoading(false);
                } catch (error) {
                    setError("Error fetching brewers");
                    setLoading(false);
                }
            };
            fetchBrewers();
        }
    }, [showBrewers]);

    useEffect(() => {
        if (showCustomers) {
            const fetchCustomers = async () => {
                try {
                    const fetchedCustomers = await customerService.getCustomers();
                    setCustomers(fetchedCustomers); // Corrected this line
                    setLoading(false);
                } catch (error) {
                    setError("Error fetching customers");
                    setLoading(false);
                }
            };
            fetchCustomers();
        }
    }, [showCustomers]);

    const handleShowBreweries = () => {
        setShowBreweries((prev) => !prev);
    };

    const handleShowBrewers = () => {
        setShowBrewers((prev) => !prev); // Corrected this line
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

            {/* Manage Brewers Section */}
            <div className="card form-control text-center p-4 mt-3">
                <h4>Manage Brewers:</h4>
                <button className="btn btn-outline-success mt-2" onClick={handleShowBrewers}>
                    {showBrewers ? "Hide All Brewers" : "View All Brewers"}
                </button>
            </div>

            {showBrewers && (
                <div className="card form-control mt-3">
                    <h4>All Brewers</h4>
                    {loading ? (
                        <p>Loading brewers...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <ul>
                            {brewers.map((brewer) => (
                                <li key={brewer.brewerId}>
                                    {brewer.brewerName} - {brewer.city}, {brewer.stateProvince}
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

            {showCustomers && (
                <div className="card form-control mt-3">
                    <h4>All Customers</h4>
                    {loading ? (
                        <p>Loading customers...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <ul>
                            {customers.map((customer) => (
                                <li key={customer.customerId}>
                                    {customer.customerName}
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
