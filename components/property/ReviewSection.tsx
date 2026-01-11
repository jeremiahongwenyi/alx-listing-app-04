import axios from "axios";
import { useState, useEffect } from "react";

type Property = {
  id: number;
  title: string;
  description: string;
  price: number;
  // add more fields as needed
};

type Reviews = {
  id: number;
  comment: string;
  // add more fields as needed
};

const ReviewSection: React.FC<{ propertyId: string }> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Reviews[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;