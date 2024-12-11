import React, { useState } from 'react';

//Tog hjälp av ChatGpt här

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    console.log('Accordion toggled:', !isOpen);
    setIsOpen(!isOpen);
  };

  if (!item) {
    console.warn('AccordionItem: Missing item props');
    return null; // Renderar ingenting om item saknas
  }

  return (
    <div className="accordion-item">
      <div
        className={`item-titlebar ${isOpen ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        <h3>{item.title || 'No Title Available'}</h3>
        <div className="btn btn-accordion">
          <i
            className={`item-icon fa-solid ${
              isOpen ? 'fa-chevron-up' : 'fa-chevron-down'
            }`}
          ></i>
        </div>
      </div>
      {isOpen && (
        <div className="item-content">
          <p>{item.content || 'No Content Available'}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
