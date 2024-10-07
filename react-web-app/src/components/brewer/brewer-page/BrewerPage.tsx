import { Outlet } from "react-router-dom";
import BrewerContextProvider from "../../../contexts/brewer-context/BrewerContextProvider";

export default function BrewerPage(){

    return (

        <BrewerContextProvider>
            <h1>Brewers ONLY</h1>
            <Outlet />
        </BrewerContextProvider>
    )
}