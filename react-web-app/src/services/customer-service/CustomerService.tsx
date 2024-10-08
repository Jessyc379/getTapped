import axios from "axios";
import { Customer } from "../../models/customer/Customer";

class CustomerService
{
    baseUrl = `${import.meta.env.VITE_API_BASE_URL}/customers`

    async getCustomers(): Promise<Customer[]>
    {
        const response = await axios.get<Customer[]>(this.baseUrl)
        return response.data
    }

    async addCustomer(customer: Customer): Promise<Customer>
    {
        const response = await axios.post<Customer>(this.baseUrl, customer)
        return response.data
    }

    async updateCustomer(customer: Customer): Promise<void>
    {
        const url = `${this.baseUrl}/${customer.customerId}`
        await axios.put<void>(url, customer)
    }

    async deleteCustomer(id: number)
    {
        const url = `${this.baseUrl}/${id}`
        await axios.delete<void>(url)
    }
}

const customerService = new CustomerService()
export default customerService