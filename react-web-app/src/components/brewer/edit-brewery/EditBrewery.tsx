import { useParams } from "react-router-dom"

export default function EditBrewery(){

    const location = useParams();
    const breweryId = location.breweryId

    
    console.log("params:" , breweryId);
    
    return(
        <>
        <div className="container mt-5">
        <h4>Edit Brewery: </h4>

        </div>
        </>
    )

}