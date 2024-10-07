import React from 'react';
import { Customer } from '../models/customer';

export interface CustomersContextType{
    customers: Customer[];
    addCustomer: (customer: Customer) => Promise<void>;
    updateCustomer: (customer: Customer) => Promise<void>;
    deleteCustomer: (customer: Customer) => Promise<void>;
    refreshCustomers: () => Promise<void>;
}

export const CustomersContext = React.createContext<CustomersContextType | undefined>(undefined);