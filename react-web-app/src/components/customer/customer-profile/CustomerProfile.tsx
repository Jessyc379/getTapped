import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CustomersContext } from "../../../contexts/CustomersContext"

export default function CustomerProfile()
{
    const { customerId } = useParams()
    const context = useContext(CustomersContext)

    if(!context)
    {
        throw new Error('CustomerProfile must be used within a CustomersContextProvider')
    }

//     return (
//         <>
//             userId
//             username
//             userRole
//             favoriteBreweries
//             reviews
//         </>
//     )
}