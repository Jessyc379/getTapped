// src/contexts/admin-context/AdminContext.tsx
import React from "react";
import { Brewer } from "../../models/brewer/Brewer";
import { Brewery } from "../../models/brewery/Brewery";

export interface AdminContextType {
    brewers: Brewer[];
    breweries: Brewery[];
    getBrewery: (brewId: number) => Promise<void>;
    addBrewer: (brewer: Brewer) => Promise<void>;
    addBrewery: (brewery: Brewery) => Promise<void>;
    updateBrewer: (brewer: Brewer) => Promise<void>;
    deleteBrewer: (brewerId: number) => Promise<void>;
    refreshBrewers: () => Promise<void>;
    getBrewer: (brewerId: number) => Promise<void>;
    refreshBreweries: () => Promise<void>;
}

export const AdminContext = React.createContext<AdminContextType | undefined>(undefined);
