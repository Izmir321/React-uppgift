import React from 'react'
import "./contact.css";

const MapContainer = () => {
  return (
    <div className="map-container">
    
    <div className="map">
      <img src="images/map.png" alt="Map showing medical centers" />
    </div>

    
    <div className="info">
      <div className="center">
        <h2>Medical Center 1</h2>
        <p><i className="fas fa-map-marker-alt"></i> 4517 Washington Ave. Manchester, Kentucky 39495</p>
        <p><i className="fas fa-phone-alt"></i> (406) 555-0120</p>
        <p><i className="fas fa-clock"></i> Mon - Fri: 9:00 am - 22:00 pm Sat - Sun: 9:00 am - 20:00 pm</p>
      </div>

      <div className="center">
        <h2>Medical Center 2</h2>
        <p><i className="fas fa-map-marker-alt"></i> 2464 Royal Ln. Mesa, New Jersey 45463</p>
        <p><i className="fas fa-phone-alt"></i> (406) 544-0123</p>
        <p><i className="fas fa-clock"></i> Mon - Fri: 9:00 am - 22:00 pm  Sat - Sun: 9:00 am - 20:00 pm</p>
      </div>

      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>
  )
}

export default MapContainer