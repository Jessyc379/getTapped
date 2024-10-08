import React, { createContext, useState, useEffect } from 'react';
import { Brewery } from '../../models/brewery/Brewery'; 
import BreweryService from '../../services/brewery-service/BreweryService';  
import { CustomerReview } from '../../models/customer-review/CustomerReview';


export interface BreweryContextType {

    breweries: Brewery[];
    reviews: CustomerReview[]; 
    getReviewByBreweryId: (breweryId: string) => Promise<CustomerReview[]>;
    addBrewery: (brewery: Brewery) => Promise<void>;
    updateBrewery: (brewery: Brewery) => Promise<void>;
    deleteBrewery: (breweryId: string) => Promise<void>;
    refreshBreweries: () => Promise<void>;
    fetchBreweries: (brewId?: number) => Promise<void>;
}

export const BreweryContext = React.createContext<BreweryContextType | undefined>(undefined);