import { Outlet } from "react-router-dom";

export default function AdminPage()
{
    return (
        <>
        <h1>Welcome</h1>

        <Outlet />

        </>
    )
}