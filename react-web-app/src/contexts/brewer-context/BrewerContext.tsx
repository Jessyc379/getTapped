import React from "react";
import { Brewer } from "../../models/brewer/Brewer";
import { Brewery } from "../../models/brewery/Brewery";

export interface BrewerContextType{
    brewers: Brewer[];
    breweries:Brewery[];
    getBrewery: (brewId: number) => Promise<void>;
    addBrewer: (brewer: Brewer) => Promise<void>;
    addBrewery: (brewery: Brewery) => Promise<void>;
    updateBrewer: (brewer:Brewer) => Promise<void>;
    deleteBrewer: (brewerId: number) => Promise<void>;
    refreshBrewers: () => Promise<void>;
    fetchBrewers:() =>Promise<void>;
    getBrewer:(brewerId:number) => Promise<void>;
    
}

export const BrewerContext = React.createContext<BrewerContextType | undefined>(undefined);