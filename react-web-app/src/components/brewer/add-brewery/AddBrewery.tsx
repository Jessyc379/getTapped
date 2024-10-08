import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brewery } from "../../../models/brewery/Brewery";
import { BrewerContext } from "../../../contexts/brewer-context/BrewerContext";

export default function AddBrewery() {
    const navigate = useNavigate()
    const context = useContext(BrewerContext)

    if(!context)
    {
        throw new Error('No Brewery Context found')
    }

    const {addBrewery} = context;

    const [breweryName, setBreweryName] = useState<string>();
    const [breweryType, setBreweryType] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [city, setCity] = useState<string>();
    const [stateProvince, setStateProvince] = useState<string>();
    const [postalCode, setPostalCode] = useState<string>();
    const [country, setCountry] = useState<string>();
    const [longitude, setLongitude] = useState<number>(0.0);
    const [latitude, setLatitude] = useState<number>(0.0);
    const [phone, setPhone] = useState<string>();
    const [websiteUrl, setWebsiteUrl] = useState<string>();
    const [brewerId, setBrewerId] = useState<number>();

    async function addBreweryHandler() {
        const brewery = new Brewery()
        brewery.breweryName = breweryName!
        brewery.breweryType = breweryType??''
        brewery.address = address!
        brewery.city = city!
        brewery.stateProvince = stateProvince!
        brewery.postalCode = postalCode
        brewery.country = country!
        brewery.longitude = longitude
        brewery.latitude = latitude
        brewery.phone = phone
        brewery.websiteUrl= websiteUrl
        brewery.brewerId = brewerId

        await addBrewery(brewery)
        navigate('/brewers')
        
        
    }



    return (
        <div className="container">
            <h2>Add New Brewery</h2>
            <form onSubmit={addBreweryHandler} method="post">
                <div className="row">
                    <label htmlFor="brewery-name">Brewery Name: </label>
                    <input type="text" className="form-control" name="brewery-name" id="brewery-name"
                        onChange={(e) => setBreweryName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="brewery-type"></label>
                    <select className="form-select mb-2" id="brewery-type-select"
                    onChange={(e) => setBreweryType(e.target.value)}>
                        <option className="diabled">Select Brewery Type</option>
                        <option>Craft brewery</option>
                        <option>Mircobrewery</option>
                        <option>Regional brewery</option>
                        <option>Macrobrewery</option>
                        <option>Nanobrewery</option>
                        <option>Farm brewery</option>
                        <option>Contract brewery</option>
                        <option>Brewpub</option>
                        <option>Gypsy brewery</option>

                    </select>
                </div>
                 <div className="row">
                    <label htmlFor="address">Address:</label>
                    <input type="text" className="form-control" name="address" id="address"
                        onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="city">City:</label>
                    <input type="text" className="form-control" name="city" id="city"
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="state-province">State/Province:</label>
                    <input type="text" className="form-control" name="state-province" id="state-province"
                        onChange={(e) => setStateProvince(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="postal-code">Postal code:</label>
                    <input type="text" className="form-control" name="postal-code" id="postal-code"
                        onChange={(e) => setPostalCode(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="country">Country:</label>
                    <input type="text" className="form-control" name="country" id="country"
                        onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="longitude">Longitude:</label>
                    <input type="text" className="form-control" name="longitude" id="longitude"
                        onChange={(e) => setLongitude(+e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="latitude">Latitude:</label>
                    <input type="text" className="form-control" name="latitude" id="latitude"
                        onChange={(e) => setLatitude(+e.target.value)} />
                </div>
                
                <div className="row">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" className="form-control" name="phone" id="phone"
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="webstie-url">Website/URL:</label>
                    <input type="text" className="form-control" name="website-url" id="website-url"
                        onChange={(e) => setWebsiteUrl(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="brewer-id">Brewer/Owner ID:</label>
                    <input type="text" className="form-control" name="brewer-id" id="brewer-id"
                        onChange={(e) => setBrewerId(+e.target.value)} />
                </div>

                <button className="btn btn-outline-success mt-3" type="submit">Add Brewery</button>
                <Link className="btn btn-outline-danger mt-3" to="/brewers"> Cancel</Link>

            </form>



        </div>
    )





}