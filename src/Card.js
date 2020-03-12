import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
    display: block;
    margin: 8px 16px;
    position: relative;

    @media (min-width: 768px) {
        flex: 0 0 350px; /* Not enough informaiton in screen shots on exact rules here */
    }
    @media (min-width: 1024px) {
        flex: 0 0 385px; /* Not enough informaiton in screen shots on exact rules here */
    }
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
    font-family: Arial, Helvetica, sans-serif;
    font-size: 28px; /* TODO */
    margin: 0 0 0 1rem; /* TODO */

    @media (min-width: 768px) {
        font-size: 24px; /* TODO */
    }
`

function Card({ id, image, onClick, title }) {

    const handleClick = (ev) => {
        onClick()
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    }

    const handle = title ? title.replace(/\s/g, '_') : '';

  return (
      <Anchor
          href=""
          onClick={handleClick}
      >
            <Img
                aria-describedby={`title_${handle}`}
                src={'assets/' + image} alt={title}
            ></Img>
          <Meta>
              <ChannelBrand src="assets/7plus.png"></ChannelBrand>
              <Title id={`title_${handle}`}>{title}</Title>
            </Meta>
    </Anchor>
  );
}

export default Card;
