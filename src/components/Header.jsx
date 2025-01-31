import React from 'react'

const Header = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
            <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
          <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
          <div className="buttons">
            <a className="btn-download-app" href=""><img src="images/appstore.svg" alt="appstore" /></a>
            <a className="btn-download-app" href=""><img src="images/Googleplay.svg" alt="googleplay" /></a>
          </div>

          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>
        </div>

         <div className="images">
          <img className="img-back" src="images/mybudget.svg" alt="Iphone1" />
          <img className="img-front" src="images/iphone-desktop.svg" alt="Iphone2" />
         </div>

      </div>
</section>
  )
}

export default Header