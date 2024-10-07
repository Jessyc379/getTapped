import { Outlet } from "react-router-dom";
import CustomersContextProvider from "../../../contexts/CustomersContextProvider";

export default function CustomersPage()
{
    return (

        <CustomersContextProvider>

            <h1>Customers</h1>

            <Outlet />

        </CustomersContextProvider>
    )
}