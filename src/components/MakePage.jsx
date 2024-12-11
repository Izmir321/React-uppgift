import React from 'react'

const MakePage = () => {
  return (
    <section className="make" id="make-page">
            <div className="container">
            <div className="text">
                <h2>Make your money transfer simple and clear</h2>
                <p>Banking transactions are free for you</p>
                <p>No monthly cash commission</p>
                <p>Manage payments and transactions online</p>
                <button className="learn-more">
                    Learn more <span className="arrow">→</span>
                </button>
            </div>
            <div className="images">
                <img src="images/Make/balance.png" alt="back-img" className="back-img" />
                <img src="images/Make/inner.svg" alt="front-img" className="front-img" />
            </div>
        </div>

      </section>
  )
}

export default MakePage