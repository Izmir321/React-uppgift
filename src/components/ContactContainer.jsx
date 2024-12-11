import React from 'react'


const ContactContainer = () => {
  return (
    <section className="contact-container">
      <div className="contact-info">
        <div className="breadcrumb">
          <a href="#">Homepage</a> &raquo; <span>Contact</span>
        </div>
        <h1>Contact Us</h1>
        <div className="contact-options">
          <div className="contact-option">
            <div className="icon">
              <img src="images/mail-logo.png" alt="" />
            </div>
            <div className="contact-text">
              <h2>Email Us</h2>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <a href="#">Leave a message &rarr;</a>
            </div>
          </div>

          <div className="contact-option">
            <div className="icon">
              <img src="images/careers.png" alt="" />
            </div>
            <div className="contact-text">
              <h2>Careers</h2>
              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
              <a href="#">Send an application &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      <div className="consultation-form">
        <h2>Get Online Consultation</h2>
        <form>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="specialist">Specialist</label>
          <select id="specialist" name="specialist">
            <option value="">Choose a specialist</option>
            <option value="consultant">Consultant</option>
            <option value="management">Management</option>
            <option value="customer service">Customer Service</option>
          </select>
          <button type="submit">Make an appointment</button>
        </form>
      </div>
    </section>
  );
};

export default ContactContainer