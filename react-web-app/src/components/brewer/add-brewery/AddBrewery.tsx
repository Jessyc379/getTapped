import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Brewery } from "../../../models/brewery/Brewery";
import { BrewerContext } from "../../../contexts/brewer-context/BrewerContext";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import cheers from '../../../assets/images/addbrewery.jpg'

export default function AddBrewery() {
    const context = useContext(BrewerContext)
    const [message, setMessage] = useState<string | null>(null)

    const { isAuthenticated, user } = useSelector((state: RootState) => state.authentication)
    const id = user?.brewerId

    console.log(id);


    if (!context) {
        throw new Error('No Brewery Context found')
    }
    if(!isAuthenticated){
        throw new Error("You do not have proper credentials")
    }

    const { addBrewery } = context;

    const [breweryName, setBreweryName] = useState<string>();
    const [breweryType, setBreweryType] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [city, setCity] = useState<string>();
    const [stateProvince, setStateProvince] = useState<string>();
    const [postalCode, setPostalCode] = useState<string>();
    const [country, setCountry] = useState<string>();
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);
    const [phone, setPhone] = useState<string>();
    const [websiteUrl, setWebsiteUrl] = useState<string>();
    const [brewerId, setBrewerId] = useState<number>();

    async function addBreweryHandler(event: any) {
        event.preventDefault();

        const brewery = new Brewery()
        brewery.breweryName = breweryName!
        brewery.breweryType = breweryType ?? ''
        brewery.address = address!
        brewery.city = city!
        brewery.stateProvince = stateProvince!
        brewery.postalCode = postalCode
        brewery.country = country!
        brewery.longitude = longitude
        brewery.latitude = latitude
        brewery.phone = phone
        brewery.websiteUrl = websiteUrl
        brewery.brewerId = id

        try {
            await addBrewery(brewery)
            setMessage('You\'ve successfully added brewery')
            console.log(brewery)

            setBreweryName('');
            setBreweryType('');
            setAddress('');
            setCity('');
            setStateProvince('');
            setPostalCode('');
            setCountry('');
            setStateProvince('');
            setPostalCode('');
            setCountry('');
            setLongitude(0);
            setLatitude(0);
            setPhone('');
            setWebsiteUrl('');
            setBrewerId(brewerId);
        }
        catch (error) {
            console.log("Error adding brewery: ", error);
        }
    }

    return (
        <>
        <div className="brewer-img">
            <img src={cheers} className="brewer-img"/>
        </div>
            <div className="container mb-3 mt-3">
                <h6><strong>{message}</strong></h6>
                <h2>Add New Brewery</h2>
                <form onSubmit={addBreweryHandler} method="post">
                    <div className="row">
                        <label htmlFor="brewery-name">Brewery Name: </label>
                        <input type="text"
                            className="form-control"
                            name="brewery-name"
                            id="brewery-name"
                            value={breweryName}
                            onChange={(e) => setBreweryName(e.target.value)}
                        />
                    </div>
                    {/* <div className="row">
                    <label htmlFor="brewery-type">Brewery Type:</label>
                    <input type="text"
                        className="form-control"
                        name="brewery-type"
                        value={breweryType}
                        id="brewery-type"
                        onChange={(e) => setBreweryType(e.target.value)}
                    />
                </div> */}
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
                    <Link className="btn btn-outline-danger mt-3" to="/brewers"> Cancel</Link>

                </form>

            </div>
        </>
    )

}