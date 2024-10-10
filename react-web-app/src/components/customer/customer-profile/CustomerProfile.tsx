import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CustomersContext } from '../../../contexts/customer-context/CustomersContext'
import customerService from "../../../services/customer-service/CustomerService";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import EditProfile from "../edit-profile/EditProfile";
import './CustomerProfile.css';

interface Review {
    reviewId: number;
    rating: number;
    customerReview: string;
    breweryName: string;
    city: string;
    reviewDate: string;
}

interface ProfileData {
    userId: number;
    username: string;
    userRole: string;
    favoriteBreweries: string;
    reviews: Review[];
}

export default function CustomerProfile() {
    const { customerId } = useParams();
    const context = useContext(CustomersContext);
    const { isAuthenticated, user } = useSelector((state: RootState) => state.authentication);
    const userId = user?.id;

    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    if (!context) {
        throw new Error('CustomerProfile must be used within a CustomersContextProvider');
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
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

    const handleSaveProfile = (updatedData: ProfileData) => {
        setProfileData(updatedData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
        <div className="profile-page">
            <div className="profile-container">
                <p><strong>User ID: </strong> {userId} </p>
                <p><strong>Username: </strong> {profileData?.username} </p>
                <p><strong>User Role: </strong> {profileData?.userRole} </p>
                <p><strong>Favorite Breweries: </strong> {profileData?.favoriteBreweries} </p>
                <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            </div>

            {isEditing && profileData ? (
                <EditProfile 
                    initialProfileData={profileData}
                    onSave={handleSaveProfile} 
                    onCancel={handleCancel} 
                />
            ) : (

                <div className="reviews-container">
                    <h3> Reviews: </h3>
                    {profileData?.reviews.length === 0 ? (
                        <p> No reviews available </p>
                    ) : (
                        <ul>
                            {profileData?.reviews.map((review) => (
                                <li key={review.reviewId} className="review-item">
                                    <div className="review-container">
                                        <p><strong> {review.breweryName} </strong>  </p>
                                        <p className="indented-text"><strong> Location: </strong> {review.city} </p>
                                        <p className="indented-text"><strong> Rating: </strong> {review.rating} </p>
                                        <p className="indented-text"><strong> Review: </strong> {review.customerReview} </p>
                                        <p className="indented-text"><strong> Review Date: </strong> {review.reviewDate} </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>    
        </>
    );
}