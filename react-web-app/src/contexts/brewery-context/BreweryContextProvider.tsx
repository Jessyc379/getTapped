import React, { useState, useEffect } from 'react';
import { BreweryContext, BreweryContextType } from './BreweryContext';
import { Brewery } from '../../models/brewery/Brewery';
import BreweryService from '../../services/brewery-service/BreweryService';

interface Props {
    children: React.ReactNode;
}

export default function BreweryContextProvider({ children }: Props) {

    const [brewery, setBrewery] = useState<Brewery[]>([]);

    useEffect(() => {
        fetchBrewery()
    }, []);


    async function fetchBrewery() {
        try
        {
            const brewery = await BreweryService.getAllBreweries()
            setBrewery(brewery)
        } catch (error) {
            console.error('Error getting breweries:', error);
        }
    }

    async function addBrewery(brewery: Brewery) {
        try {
            const newBrewery = await BreweryService.addBrewery(brewery)

            setBrewery(prevBrewery => [...prevBrewery, newBrewery]);
        } catch (error) {
            console.error('Error adding brewery:', error);
        }
    }
}