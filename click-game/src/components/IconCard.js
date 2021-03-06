import React from 'react';

const IconCard = props => (
<section id={props.id} className="tc pa2 hvr-float-shadow animated zoomInUp" value={props.id} onClick={() =>
  props.clickedPlayer(props.id)
  }>
    <article className="w4 pa2 ">
      <img src={props.image} className="db" alt="puppies" />
    </article>
  </section>
)

export default IconCard;

