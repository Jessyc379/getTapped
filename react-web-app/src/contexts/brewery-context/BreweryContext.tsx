import React from 'react';
import { Brewery } from '../../models/brewery/Brewery';

export interface BreweryContextType {

    breweries: Brewery[];
    addBrewery: (brewery: Brewery) => Promise<void>;
    updateBrewery: (brewery: Brewery) => Promise<void>;
    deleteBrewery: (breweryId: number) => Promise<void>;
    refreshBreweries: () => Promise<void>;
}

export const BreweryContext = React.createContext<BreweryContextType | undefined>(undefined);