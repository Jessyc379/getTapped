import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { BrewerContext } from "../../../contexts/brewer-context/BrewerContext";
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
            longitude: 0,
            latitude: 0,
            phone: '',
            websiteUrl: '',
            brewerId: 0

        })


    async function loadBrewery() {
        const brewery = await breweryService.getBreweryById(breweryId ?? '')
        setBrewery(brewery)
        console.log('loaded brwery:', brewery);

    }

    useEffect(() =>
    {
        loadBrewery();
    }, [])

    const { updateBrewery } = breweryContext;

    async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setBrewery({
            ...brewery,
            [name]: value
        });
    }

    async function handleSumbit(e: React.FormEvent) {
        e.preventDefault();

        try {
            await updateBrewery(brewery);
            setMessage('You\'ve successfully edited brewery!')

            setBrewery({
                breweryId: '',
                breweryName: '',
                breweryType: '',
                address: '',
                city: '',
                stateProvince: '',
                postalCode: '',
                country: '',
                longitude: 0,
                latitude: 0,
                phone: '',
                websiteUrl: '',
                brewerId: id
            })
        } catch (error) {
            console.error('Error editing this brewery', error);
            setMessage('Sorry, an Error occurred editing this brewery')
        }
    }



    //     const {updateBrewery} = breweryContext;

    //     const [ brewery, setBrewery] = useState<Brewery>({
    //         breweryId: '',
    //         breweryName: '',
    //         breweryType: '',
    //         address: '',
    //         city: '',
    //         stateProvince: '',
    //         postalCode: '',
    //         country: '',
    //         longitude: 0,
    //         latitude: 0,
    //         phone: '',
    //         websiteUrl: '',
    //         brewerId: 0

    //     })



    //     useEffect(() => {
    //         async function getBrewery(){
    //             const brewery = await breweryService.getBreweryById(breweryId)

    //                 setBreweryName(brewery.breweryName)
    //                 setBreweryType(brewery.breweryType ?? '')
    //                 setAddress(brewery.address)
    //                 setCity(brewery.city)
    //                 setStateProvince(brewery.stateProvince)
    //                 setPostalCode(brewery.postalCode ?? '')
    //                 setCountry(brewery.country)
    //                 setLongitude(brewery.longitude ?? 0);
    //                 setLatitude(brewery.latitude ?? 0);
    //                 setPhone(brewery.phone ?? '');
    //                 setWebsiteUrl(brewery.websiteUrl ?? '')
    //                 setBrewerId(id)
    //         }
    //         getBrewery();
    //     })

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {name , value} = e.target;
    //     set({
    //         ...
    //     })
    // }

    return (
        <>
            {/* <div>
                <img></img>
            </div> */}
            <div className="container mt-5">
                <h6><strong>{message}</strong></h6>

                <h4>Edit Brewery: </h4>
                <form onSubmit={handleSumbit} method="put">
                    <div className="row">
                        <label htmlFor="brewery-name">Brewery Name: </label>
                        <input type="text"
                            className="form-control"
                            name="brewery-name"
                            id="brewery-name"
                            value={brewery.breweryName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="brewery-type">Brewery Type:</label>
                        <input type="text"
                            className="form-control"
                            name="brwery-type"
                            id="brewery-type"
                            value={brewery.breweryType}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="address">Address:</label>
                        <input type="text"
                            className="form-control"
                            name="address"
                            id="address"
                            value={brewery.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="city">City:</label>
                        <input type="text"
                            className="form-control"
                            name="city"
                            id="city"
                            value={brewery.city}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="state-province">State/Province:</label>
                        <input type="text"
                            className="form-control"
                            name="state-province"
                            id="state-province"
                            value={brewery.stateProvince}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="postal-code">Postal code:</label>
                        <input type="text"
                            className="form-control"
                            name="postal-code"
                            id="postal-code"
                            value={brewery.postalCode}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="country">Country:</label>
                        <input type="text"
                            className="form-control"
                            name="country"
                            id="country"
                            value={brewery.country}
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
                            value={brewery.longitude}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="latitude">Latitude:</label>
                        <input type="number"
                            className="form-control"
                            value={brewery.latitude}
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
                            value={brewery.phone}
                            id="phone"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="website-url">Website/URL:</label>
                        <input type="text"
                            className="form-control"
                            name="website-url"
                            value={brewery.websiteUrl}
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