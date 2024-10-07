import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CustomersContext } from "../../../contexts/CustomersContext"
import axios from 'axios'

export default function CustomerProfile()
{
    const { customerId } = useParams();
    const context = useContext(CustomersContext);

    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if(!context)
    {
        throw new Error('CustomerProfile must be used within a CustomersContextProvider');
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`/customers/${customerId}/reviews`);
                setProfileData(response.data);
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
    if(error) return <p>{error}</p>;

    return (
        <>
            <div>
                <p><strong>User ID: </strong> {profileData.userId} </p>
                <p><strong>Username: </strong> {profileData.username} </p>
                <p><strong>User Role: </strong> {profileData.userRole} </p>
                <p><strong>Favorite Breweries: </strong> {profileData.favoriteBreweries} </p>
                <h3> Reviews: </h3>
                {profileData.reviews.length === 0 ? (
                    <p> No reviews available </p>
                ) : (
                    <ul>
                        {profileData.reviews.map((review) => (
                            <li key={review.reviewId}>
                                <p><strong> {review.rating} </strong></p>
                                <p><strong> {review.customerReview} </strong></p>
                                <p><strong> {review.reviewDate} </strong></p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}