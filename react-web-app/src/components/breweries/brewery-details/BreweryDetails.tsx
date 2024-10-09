import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BreweryContext } from '../../../contexts/brewery-context/BreweryContext';
import { CustomerReview } from "../../../models/customer-review/CustomerReview";
import "./BreweryDetails.css"

export default function BreweryDetails() {
    const { breweryId } = useParams(); 
    const context = useContext(BreweryContext);
    const navigate = useNavigate();

    const [reviews, setReviews] = useState<CustomerReview[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    if (!context) {
        return <div>Error: Brewery context is not available</div>;
    }

    const { breweries, getReviewByBreweryId } = context;
    const brewery = breweries.find(b => b.breweryId === breweryId);

    if (!brewery) {
        return <div>Brewery not found</div>;
    }

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const fetchedReviews = await getReviewByBreweryId(breweryId!);
                setReviews(fetchedReviews);
            } catch (error) {
                setError("Error fetching reviews");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [breweryId, getReviewByBreweryId]);

    return (
        <div className="brewery-page-container">
            <div className="brewery-details-container">
                <button className="back-button" onClick={() => navigate('/breweries')}>Back to Breweries</button>

                <h2>{brewery.breweryName}</h2>
                <p>Type: {brewery.breweryType}</p>
                <p>Address: {brewery.address}, {brewery.city}, {brewery.stateProvince}</p>
                <p>Phone: {brewery.phone}</p>
                <p>Website: <a href={brewery.websiteUrl}>{brewery.websiteUrl}</a></p>

                <h3>Reviews</h3>
                {loading && <p>Loading reviews...</p>}
                {error && <p>{error}</p>}
                {!loading && reviews.length === 0 && <p>No reviews available.</p>}
                {!loading && reviews.length > 0 && (
                    <ul className="reviews-list">
                        {reviews.map((review) => (
                            <li key={review.reviewId} className="review-card">
                                <p><strong>Rating:</strong> {review.rating}</p>
                                <p>{review.customerReview}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}