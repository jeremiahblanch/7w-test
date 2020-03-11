import React from 'react';
import './App.css';
import styled from 'styled-components';

import Card from './Card.js'

const Container = styled.div`
    align-items: stretch;
    background-color: #000;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
// const Panel = styled.div``;


// Test Data
// TODO - move to sepaarate file

const SHOWS = 'Gold Digger.jpeg Liar.jpeg Little Women- LA.jpeg MKR.jpeg Pooch Perfect.jpeg Revolution.jpeg Smallville.jpeg The Good Doctor.jpeg The Resident.jpeg Transformed.jpeg'
    .split('.jpeg')
    .map(prefix => {
        let pt = prefix.trim();

        return !!pt && {
            id: pt,
            image: `${pt}.jpeg`,
            title: pt,
        };
    })
    .filter(prefix => !!prefix);


function App() {

    const updateDetail = () => { };

  return (
    <Container>
          {SHOWS.map(({id, image, title}) => (
              <Card
                key={id}
                image={image}
                  onClick={updateDetail(id)}
                title={title}
            />
        ))}
    </Container>
  );
}

export default App;
