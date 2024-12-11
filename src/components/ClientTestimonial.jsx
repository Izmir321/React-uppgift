import React from "react";
import "./Contact.css"; // Importera din CSS-fil för styling

const ClientTestimonials = () => {
  return (
    <div className="content-wrapper">
      <div className="testimonial-section" id="test-body">
        <h2 id="main-text">Clients are Loving our App</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="quote-icon">
              <img src="images/Clients/quotes.png" alt="Quotes Icon" />
            </div>
            <div className="stars">
              <img src="images/Clients/rating.png" alt="Rating Stars" />
            </div>
            <p>
              Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. 
              Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. 
              Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
            </p>
            <div className="user-info">
              <img src="images/Clients/Fannie.png" alt="Fannie Summers" className="user-photo" />
              <div>
                <h4>Fannie Summers</h4>
                <p>Designer</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
