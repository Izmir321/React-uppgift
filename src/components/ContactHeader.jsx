import React from 'react'

const ContactHeader = () => {
  return (
        <header>
        <div className="container"> 

              <a id="logotype" href=""><img src="images/logotype.svg" alt="Logotype"/></a>

              <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link-two" href="#">Contact</a>
              </nav>

              <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark Mode</span>
                <label for="darkmode-switch" className="toggle-switch">
                  <input id="darkmode-switch" type="checkbox"/>
                  <span className="slider round"></span>
                </label>
              </div>

                <a id="sign-in-btn" className="btn-primary" href="#">
                  <i className="fa-regular fa-user"></i>
                  <span>Sign in / up</span>
                </a>

                <button className="btn-mobile">
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
      </header>
      )
}

export default ContactHeader