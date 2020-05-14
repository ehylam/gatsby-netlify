import React from 'react';
import './contents.scss';


const content = ({data}) => {
  return (
    <div className="content__container">
      {data.map((content) => (
        <section className="content_container">
          <div className="content">
            <h3>{content.heading}</h3>
            <p>{content.description}</p>
          </div>
        </section>
      ))}
    </div>
   );
}

export default content;