import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CustomersContext } from "../../../contexts/CustomersContext"
import axios from 'axios'

export default function CustomerProfile()
{
    const { customerId } = useParams()
    const context = useContext(CustomersContext)

    const [profileData, setProfileData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    if(!context)
    {
        throw new Error('CustomerProfile must be used within a CustomersContextProvider')
    }

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const response = await axios.get(`/customers/${customerId}/reviews`)
//             }
//         }
//     })
//
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