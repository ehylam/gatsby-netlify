import React from 'react';
import './contents.scss';


const content = ({data}) => {
  return (
    <div className="content__container">
      {data.map((content) => (
        <section className="content__wrapper">
          <h1>{content.heading}</h1>
          <p>{content.description}</p>
          <img src={content.image}></img>
        </section>
      ))}
    </div>
   );
}

export default content;