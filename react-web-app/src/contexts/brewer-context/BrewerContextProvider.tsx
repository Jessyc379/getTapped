import React, { useEffect, useState } from "react";
import { Brewer } from "../../models/brewer/Brewer";
import brewerService from "../../services/brewer-service/BrewerService";
import { BrewerContext, BrewerContextType } from "./BrewerContext";
import { Brewery } from "../../models/brewery/Brewery";
import breweryService from "../../services/brewery-service/BreweryService";


interface Props {
    children: React.ReactNode;
}

export default function BrewerContextProvider({ children }: Props) {
    const [brewers, setBrewers] = useState<Brewer[]>([]);
    const [brewer, setBrewer] = useState<Brewer>()
    const [breweries, setBreweries] = useState<Brewery[]>([]);


    useEffect(() => {
        fetchBrewers()
    }, []);

    async function fetchBrewers() {
        try {
            const brewers = await brewerService.getBrewers()
            setBrewers(brewers)
        }
        catch (error) {
            console.error('Error getting brewers: ', error)
        }
    }

    async function getBrewer(brewerId: number) {
        try {
            const brewer = await brewerService.getBrewerById(brewerId)
            setBrewer(brewer)
        }
        catch (error) {
            console.error('Error getting brewer:', error)
        }

    }

    async function addBrewer(brewer: Brewer) {
        try {
            const newBrewer = await brewerService.addBrewer(brewer)

            setBrewers(prevBrewers => [...prevBrewers, newBrewer])
        }
        catch (error) {
            console.error('Error adding brewer: ', error)
        }

    }

    async function getBrewery(brewId: number) {
        try {
            const breweries = await breweryService.getAllBreweries(brewId)
            setBreweries(breweries)
        }
        catch (error) {
            console.error('Error getting breweries: ', error)
        }

    }

    async function addBrewery(brewery: Brewery) {
        try {
            const newBrewery = await breweryService.addBrewery(brewery)

            setBreweries(previousBreweries => [...previousBreweries, newBrewery])
        }
        catch (error) {
            console.error('Error adding brewery:', error)
        }

    }

    async function updateBrewer(brewer: Brewer) {
        try {
            await brewerService.updateBrewer(brewer)
            setBrewers((prevBrewer) =>
                prevBrewer.map(b => (b.brewerId === brewer.brewerId ? brewer : b))
            );
        }
        catch (error) {
            console.error('Error updating brewer: ', error)
        }
    };

    async function updateBrewery(brewery: Brewery) {
        try {
            await breweryService.updateBrewery(brewery);
            setBreweries((prevBreweries) =>
                prevBreweries.map(b => (b.breweryId === brewery.breweryId ? brewery : b)))
        }
        catch (error) {
            console.log('Error updating brewery: ', error);

        }
    }

    async function deleteBrewer(brewerId: number) {
        try {
            await brewerService.deleteBrewer(brewerId)

            setBrewers(prevBrewers => prevBrewers.filter(brewer => brewer.brewerId !== brewerId));
        }
        catch (error) {
            console.error('Error deleting brewer: ', error)
        }
    };

    async function refreshBrewers() {
        await fetchBrewers()

    };

    const contextValue: BrewerContextType = {
        brewers,
        getBrewer,
        breweries,
        getBrewery,
        addBrewer,
        addBrewery,
        updateBrewery,
        updateBrewer,
        deleteBrewer,
        refreshBrewers,
        fetchBrewers,
    };

    return <BrewerContext.Provider value={contextValue}>{children}</BrewerContext.Provider>







}