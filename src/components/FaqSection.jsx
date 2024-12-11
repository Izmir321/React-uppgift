import React, { useState, useEffect } from 'react';


//Tog hjälp av ChatGpt här

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(
          'https://win24-assignment.azurewebsites.net/api/faq'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();
        setFaqs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleAccordion = (index) => {
    console.log('Toggling accordion at index:', index);
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log('Fetched FAQs:', faqs);

  return (
    <section className="section-faq" id="faq-page">
      <div className="faq-section">
        <div className="faq-header">
          <h2 className="faq-heading">
            Any questions?
            <span>Check out the FAQs</span>
          </h2>
          <p>Still have unanswered questions and need to get in touch?</p>
          <div className="contact-cards">
            <div className="contact-card">
              <img src="images/icon (10).png" alt="" />
              <p>Still have questions?</p>
              <a href="#">Contact us →</a>
            </div>
            <div className="contact-card">
              <img src="images/Frame 48095375 (1).png" alt="" />
              <p>Don't like phone calls?</p>
              <a href="#">Contact us →</a>
            </div>
          </div>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.title} <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="contact-button">Contact us</button>
      </div>
    </section>
  );
};

export default FaqSection;
