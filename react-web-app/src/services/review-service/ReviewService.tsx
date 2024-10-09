import axios from "axios";
import { CustomerReview } from "../../models/customer-review/CustomerReview";


class ReviewService {

    baseUrl = `${import.meta.env.VITE_API_BASE_URL}/reviews`;


    async getAllReviews(custId?: number, brewId?: string): Promise<CustomerReview> {

        const response = await axios.get<CustomerReview>(this.baseUrl, {
            params: { custId, brewId }
        });
        return response.data;
    }

    async getReviewByCustomerId(customerId: number): Promise<CustomerReview> {

        const response = await axios.get<CustomerReview>(`${this.baseUrl}/${customerId}`);
        return response.data;
    }

}

const reviewService = new ReviewService();
export default reviewService;