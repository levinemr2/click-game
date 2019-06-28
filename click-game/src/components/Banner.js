import React from 'react';

const style = {
    bgDark: {
        margin: `0,0,0,0`,
        backgroundColor: `rgb(51,153,255)`
    }
}

const Banner = props => (
    <article style={style.bgDark} className="tc pv3">
    <h2>These pups have had a hard day.<br />
         Give them each one pet! <br />
         Don't repeat pets or the other pups will be jealous
    </h2>
  </article>
);

export default Banner;