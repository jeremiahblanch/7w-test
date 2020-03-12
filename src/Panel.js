import React from 'react';

import styled from 'styled-components';

import Card from './Card.js'

const Outer = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: transform 400ms ease;
    transform: translateX(${(props) => props.visible ? '0' : '-100%'});
    width: 100%;
    z-index: 1;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

function Panel({onClick, visible, show}) {
  return (
      <Outer
          onClick={onClick}
          visible={visible ? 1 : 0}>
          {show ? <Card
                    key={show.id}
                    image={show.image}
                    onClick={onClick}
                    title={show.title}
                />

          : ''}
        </Outer>
  );
}

export default Panel;
