import React from 'react';

import styled from 'styled-components';

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
    width: 300px; /*TODO*/
    z-index: 1;
`;


const Img = styled.img`
    width: 100%;
`;


function Panel({onClick, visible, show}) {
  return (
      <Outer
          onClick={onClick}
          visible={visible ? 1 : 0}>
          {show ? <picture>
              <Img src={'/assets/' + show.image} alt={show.title}></Img>
          </picture>
          : ''}
        </Outer>
  );
}

export default Panel;
