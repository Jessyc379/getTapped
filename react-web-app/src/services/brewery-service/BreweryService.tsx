import axios from "axios";
import { Brewery } from '../../models/brewery/Brewery';

class BreweryService {

    baseUrl = `${import.meta.env.VITE_API_BASE_URL}/breweries`

    async getAllBreweries(): Promise<Brewery[]> {

        const response = await axios.get<Brewery[]>(this.baseUrl)
        return response.data

    }

    async addBrewery(brewery: Brewery): Promise<Brewery> {

        const response = await axios.post<Brewery>(this.baseUrl, brewery)
        return response.data

    }

    async updateBrewery(brewery: Brewery): Promise<void> {

        const url = `${this.baseUrl}/${brewery.breweryId}`
        await axios.put<void>(url, brewery)
    }

    async deleteBrewery(id: string) {

        const url = `${this.baseUrl}/${this.baseUrl}/${id}`
        await axios.delete<void>(url)
    }


}

const breweryService = new BreweryService()
export default breweryService