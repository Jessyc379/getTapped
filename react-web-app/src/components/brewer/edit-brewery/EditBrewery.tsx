import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BrewerContext } from "../../../contexts/brewer-context/BrewerContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { BreweryContext } from "../../../contexts/brewery-context/BreweryContext";

export default function EditBrewery(){

    const location = useParams();
    const breweryId = location.breweryId
    const{ isAuthenticated, user } = useSelector((state: RootState) => state.authentication)
    const id = user?.brewerId;
    console.log("params:" , breweryId);
    
    const breweryContext = useContext(BreweryContext)
    const [ message, setMessage] = useState<string | null> (null);

    if(!breweryContext){
        throw new Error("No Brewer Context Found")
    }
    if(!isAuthenticated){
        throw new Error("You do not have proper credentials")
    }


    const {updateBrewer, getBrewery} = breweryContext;

    const [breweryName, setBreweryName] = useState<string>('');
    const [breweryType, setBreweryType] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [stateProvince, setStateProvince] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);
    const [phone, setPhone] = useState<string>('');
    const [websiteUrl, setWebsiteUrl] = useState<string>('');
    const [brewerId, setBrewerId] = useState<number>();

    // useEffect()

    
    return(
        <>
        <div>
            <img></img>
        </div>
        <div className="container mt-5">
            <h4>Edit Brewery: </h4>
            <form method="put">
            {/* <div className="row">
                        <label htmlFor="brewery-name">Brewery Name: </label>
                        <input type="text"
                            className="form-control"
                            name="brewery-name"
                            id="brewery-name"
                            value={breweryName}
                            onChange={(e) => setBreweryName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="brewery-type"></label>
                        <select className="form-select mb-2"
                            id="brewery-type-select"
                            value={breweryType}
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
                        <input type="text"
                            className="form-control"
                            name="address"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="city">City:</label>
                        <input type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="state-province">State/Province:</label>
                        <input type="text"
                            className="form-control"
                            name="state-province"
                            id="state-province"
                            value={stateProvince}
                            onChange={(e) => setStateProvince(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="postal-code">Postal code:</label>
                        <input type="text"
                            className="form-control"
                            name="postal-code"
                            id="postal-code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="country">Country:</label>
                        <input type="text"
                            className="form-control"
                            name="country"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="longitude">Longitude:</label>
                        <input
                            type="number"
                            className="form-control"
                            name="longitude"
                            id="longitude"
                            value={longitude}
                            onChange={(e) => setLongitude(+e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="latitude">Latitude:</label>
                        <input type="number"
                            className="form-control"
                            value={latitude}
                            name="latitude"
                            id="latitude"
                            onChange={(e) => setLatitude(+e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="text"
                            className="form-control"
                            name="phone"
                            value={phone}
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="website-url">Website/URL:</label>
                        <input type="text"
                            className="form-control"
                            name="website-url"
                            value={websiteUrl}
                            id="website-url"
                            onChange={(e) => setWebsiteUrl(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-outline-success mt-3" type="submit">Add Brewery</button>
                    <Link className="btn btn-outline-danger mt-3" to="/brewers"> Cancel</Link> */}

            </form>


        </div>
        </>
    )

}