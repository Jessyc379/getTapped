import axios from "axios";
import { Brewer } from "../../models/brewer/Brewer";
import { act } from "react";

class BrewerService 
{
    baseUrl = `${import.meta.env.VITE_API_BASE_URL}/brewers`

    async getBrewers(): Promise<Brewer>
    {
        const response = await axios.get<Brewer>(this.baseUrl)
        return response.data
    }

    async getBrewerById(id:Number): Promise<Brewer>
    {
        const response = await axios.get(`${this.baseUrl}/${id}`)
        return response.data
    }

    async addBrewer(brewer: Brewer):Promise<Brewer>
    {
        const respose = await axios.post<Brewer>(this.baseUrl, brewer)
        return respose.data
    }

    async updateBrewer(brewer: Brewer): Promise<void>
    {
        const url = `${this.baseUrl}/${brewer.brewerId}`
        await axios.put<void>(url, brewer)
    }

    async deleteBrewer(id:number)
    {
        const url = `${this.baseUrl}/${id}`
        await axios.delete<void>(url)
    }


}

const brewerService = new BrewerService();
export default brewerService;