import { Outlet } from "react-router-dom";

export default function AdminPage()
{
    return (
        <>
        <h1>Welcome to Your Dashboard</h1>
        <Outlet />

        </>
    )
}