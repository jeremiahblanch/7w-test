import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
    display: block;
    flex: 1 0 100%;
    margin: 20px 28px 0 28px;
    min-width: 320px;
    position: relative;

    @media (min-width: 768px) {
        max-width: 385px;
        flex: 1 0 0;
        margin: 20px 20px 0 20px;
    }
`;
const Img = styled.img`
    width: 100%;
`;

const Meta = styled.div`
    align-items: center;
    bottom: 0;
    box-sizing: border-box;
    background-color: #00000088;
    display: flex;
    height: 30%;
    left: 0;
    max-height: 63px;
    padding: 12px;
    position: absolute;
    right: 0;
    z-index: 1;
`;
const ChannelBrand = styled.img`
    height: 100%;
    margin-right: 12px;
`;

const Title = styled.h4`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 22px;
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
                alt={title}
                aria-describedby={`title_${handle}`}
                src={'assets/' + image}
            ></Img>
          <Meta>
              <ChannelBrand src="assets/7plus.png" alt="7Plus Logo"></ChannelBrand>
              <Title id={`title_${handle}`}>{title}</Title>
            </Meta>
    </Anchor>
  );
}

export default Card;
