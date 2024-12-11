import React from 'react'

const Subscription = () => {
  return (
    <section>
    <div className="subscription-container">
    <div className="icon-text">
        <img src="images/notification.png" alt="" className="notification-icon" />
        <h4 className="desktop-heading">Subscribe to our newsletter to stay informed about latest updates</h4>
        <h4 className="mobile-heading">Subscribe to our newsletter</h4>
    </div>
    <form className="subscription-form">
        <input type="email" placeholder="&#x1F4E7;  Your email" required />
        <button type="submit">Subscribe</button>
    </form>
</div>
</section>
  )
}

export default Subscription