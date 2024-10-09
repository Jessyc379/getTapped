import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { BreweryContext } from "../../../contexts/brewery-context/BreweryContext";
import breweryService from "../../../services/brewery-service/BreweryService";
import { Brewery } from "../../../models/brewery/Brewery";

export default function EditBrewery() {

    const location = useParams();
    const breweryId = location.breweryId
    const { isAuthenticated, user } = useSelector((state: RootState) => state.authentication)
    const id = user?.brewerId;
    console.log("params:", breweryId);

    const breweryContext = useContext(BreweryContext)
    const [message, setMessage] = useState<string | null>(null);

    if (!breweryContext) {
        throw new Error("No Brewer Context Found")
    }
    if (!isAuthenticated) {
        throw new Error("You do not have proper credentials")
    }

    const [brewery, setBrewery] = useState<Brewery>
        ({

            breweryId: '',
            breweryName: '',
            breweryType: '',
            address: '',
            city: '',
            stateProvince: '',
            postalCode: '',
            country: '',
            phone: '',
            websiteUrl: '',
            brewerId: id

        })


    async function loadBrewery() {
        const brewery = await breweryService.getBreweryById(breweryId ?? '')
        if(brewery){
            setBrewery(brewery)
            console.log('loaded brwery:', brewery);
        }
        else{
            setMessage("Brewery Not Found :(")
        }
    }

    useEffect(() =>
    {
        if(breweryId){
            loadBrewery();
        }
    }, [breweryId])

    const { updateBrewery } = breweryContext;

    async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setBrewery({
            ...brewery,
            [name]: name === "longitude" || name === "latitude" || name === "brewerId" ? +value : value
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const updatedPub = await updateBrewery(brewery);
            setMessage('You\'ve successfully edited brewery!')
            console.log('update: ',updatedPub);
            


        } catch (error) {
            console.error('Error editing this brewery', error);
            setMessage('Sorry, an Error occurred editing this brewery')
        }
    }

    return (
        <>
            {/* <div>
                <img></img>
            </div> */}
            <div className="container mt-5">
                <h6><strong>{message}</strong></h6>

                <h4>Edit Brewery: </h4>
                <form onSubmit={handleSubmit} method="put">
                    <div className="row">
                        <label htmlFor="brewery-name">Brewery Name: </label>
                        <input type="text"
                            className="form-control "
                            name="brewery-name"
                            id="brewery-name"
                            defaultValue={brewery.breweryName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="brewery-type">Brewery Type:</label>
                        <input type="text"
                            className="form-control"
                            name="brwery-type"
                            id="brewery-type"
                            defaultValue={brewery.breweryType}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="address">Address:</label>
                        <input type="text"
                            className="form-control"
                            name="address"
                            id="address"
                            defaultValue={brewery.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="city">City:</label>
                        <input type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            defaultValue={brewery.city}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="state-province">State/Province:</label>
                        <input type="text"
                            className="form-control"
                            name="state-province"
                            id="state-province"
                            defaultValue={brewery.stateProvince}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="postal-code">Postal code:</label>
                        <input type="text"
                            className="form-control"
                            name="postal-code"
                            id="postal-code"
                            defaultValue={brewery.postalCode}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="country">Country:</label>
                        <input type="text"
                            className="form-control"
                            name="country"
                            id="country"
                            defaultValue={brewery.country}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="longitude">Longitude:</label>
                        <input
                            type="number"
                            className="form-control"
                            name="longitude"
                            id="longitude"
                            defaultValue={brewery.longitude}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="latitude">Latitude:</label>
                        <input type="number"
                            className="form-control"
                            defaultValue={brewery.latitude}
                            name="latitude"
                            id="latitude"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="text"
                            className="form-control"
                            name="phone"
                            defaultValue={brewery.phone}
                            id="phone"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="website-url">Website/URL:</label>
                        <input type="text"
                            className="form-control"
                            name="website-url"
                            defaultValue={brewery.websiteUrl}
                            id="website-url"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="btn btn-outline-success mt-3" type="submit">Edit Brewery</button>
                    <Link className="btn btn-outline-danger mt-3" to="/brewers"> Cancel</Link>

                </form>


            </div>
        </>
    )

}