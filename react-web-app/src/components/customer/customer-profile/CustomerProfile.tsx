import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CustomersContext } from '../../../contexts/customer-context/CustomersContext'
import customerService from "../../../services/customer-service/CustomerService";

interface Review {
    reviewId: number;
    rating: number;
    customerReview: string;
    reviewDate: string;
}

interface ProfileData {
    userId: number;
    username: string;
    userRole: string;
    breweryName: string;
    favoriteBreweries: string;
    reviews: Review[];
}

export default function CustomerProfile()
{
    const { customerId } = useParams();
    const context = useContext(CustomersContext);

    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    if(!context)
    {
        throw new Error('CustomerProfile must be used within a CustomersContextProvider');
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                //const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/customers/reviews`);
                const reviews = await customerService.getCustomerReviews()
                setProfileData(reviews);
                setLoading(false);
            }
            catch (error) {
                console.error("Error fetching profile data", error);
                setError("Error fetching profile data");
                setLoading(false);
            }
        };

        fetchProfile();
    }, [customerId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div>
                <p><strong>User ID: </strong> {profileData?.userId} </p>
                <p><strong>Username: </strong> {profileData?.username} </p>
                <p><strong>User Role: </strong> {profileData?.userRole} </p>
                <p><strong>Favorite Breweries: </strong> {profileData?.favoriteBreweries} </p>
                <h3> Reviews: </h3>
                {profileData?.reviews.length === 0 ? (
                    <p> No reviews available </p>
                ) : (
                    <ul>
                        {profileData?.reviews.map((review) => (
                            <li key={review.reviewId}>
                                <p><strong> Brewery Name: </strong> {review.breweryName} </p>
                                <p><strong> Rating: </strong> {review.rating} </p>
                                <p><strong> Reviews: </strong> {review.customerReview} </p>
                                <p><strong> Review Date: </strong> {review.reviewDate} </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}