import React, { useState, useEffect } from "react";
import "./Contact.css"; 




const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/testimonials"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="testimonial-section">
      <h2>Clients are Loving our App</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="quote-icon">
              <img
                src="https://win24assignmentstorage.blob.core.windows.net/images/quotes.png"
                alt="Quote Icon"
              />
            </div>
            <div className="stars">
              {"★".repeat(testimonial.starRating).padEnd(5, "☆")}
            </div>
            <p>{testimonial.comment}</p>
            <div className="user-info">
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.author}
                className="user-photo"
              />
              <div>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.jobRole}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

