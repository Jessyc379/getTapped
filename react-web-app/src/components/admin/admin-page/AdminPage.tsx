import { Outlet } from "react-router-dom";

export default function AdminPage()
{
    return (
        <>
        <h1 style="font-size: 24px;">Welcome to Your Dashboard</h1>
        <Outlet />

        </>
    )
}