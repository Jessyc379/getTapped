import { Outlet } from "react-router-dom";
import BreweryContextProvider from "../../../contexts/brewery-context/BreweryContextProvider";

export default function BreweriesPage() {

    return (

        <BreweryContextProvider>
        
            <h1>Breweries</h1>

            <Outlet />

        </BreweryContextProvider>

    )

}
