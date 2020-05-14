import React from 'react';


const hero = ({data}) => {
  return (
    {data.map((content) => (
<section className="hero_container" >
  <div className="background" style="background-image: url()">
    <div className="hero-content__wrapper">
      <h1 className="me">{content.heading}</h1>
      <h3>{content.description}</h3>
    </div>
  </div>
  <div className="foreground"></div>
</section>
    ))}
   );
}

export default hero;