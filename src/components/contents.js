import React from 'react';


const content = ({data}) => {
  return (
    <div>
      {data.map((content) => (
        <section>
          <h1>{content.heading}</h1>
          <p>{content.description}</p>
          <img src={content.image}></img>
        </section>
      ))}
    </div>
   );
}

export default content;