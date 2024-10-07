import { useContext } from "react"
import { useParams } from "react-router-dom"
import { BreweryContext } from "../../../contexts/brewery-context/BreweryContext"


export default function BreweryDetails() {

    const {breweryId} = useParams()
    const context = useContext(BreweryContext)

    if(!context) {
        throw new Error('BreweryList must be used within an BreweryContextProvider')
    }

    const {breweries} = context
    const brewery = breweries.filter(b => +b.brewerId == +(breweryId??0))[0];

    return (
        <>
        <h4>{brewery.breweryId}</h4>
        <p>{brewery.breweryName}</p>
        </>
    )

}