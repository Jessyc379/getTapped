import { useParams } from "react-router-dom"


export default function AdminDashboard()
{
    const params = useParams()


    return (
        <>
        <h4>AdminDashboard - AdminDashboard {params.adminId}</h4>
        </>
    )
}