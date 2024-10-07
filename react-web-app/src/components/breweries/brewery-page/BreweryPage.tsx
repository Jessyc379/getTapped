import { Outlet } from "react-router-dom";
import BreweryList from '../../breweries/brewery-list/BreweryList'
import BreweryContextProvider from "../../../contexts/brewery-context/BreweryContextProvider";

export default function BreweriesPage() {
    return (

        <BreweryContextProvider>

            <h1>Breweries</h1>
            <BreweryList /> 
            
            <Outlet />

        </BreweryContextProvider>
    );
}