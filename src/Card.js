import React from 'react';

import styled from 'styled-components';

const Anchor = styled.a`
    display: block;
    margin: 8px 16px;
    position: relative;
`;
const Img = styled.img`
    width: 100%;
`;

const Meta = styled.div`
    align-items: stretch;
    bottom: 0;
    background-color: #00000033; /* TODO */
    display: flex;
    height: 2rem; /* TODO */
    left: 0;
    padding: 1rem; /* TODO */
    position: absolute;
    right: 0;
    z-index: 1;
`;
const ChannelBrand = styled.img`
    height: 100%; /* TODO */
`;

const Title = styled.h4`
    color: white; /* TODO */
    font-size: 28px; /* TODO */
    margin: 0 0 0 1rem; /* TODO */
`

function Card({ id, image, onClick, title }) {

    const handleClick = (ev) => {
        onClick()
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    }

  return (
      <Anchor
          href=""
          onClick={handleClick}
      >
          <picture>
              <Img src={'/assets/' + image} alt={title}></Img>
          </picture>
          <Meta>
              <ChannelBrand src="/assets/7plus.png"></ChannelBrand>
              <Title>{title}</Title>
            </Meta>
    </Anchor>
  );
}

export default Card;
