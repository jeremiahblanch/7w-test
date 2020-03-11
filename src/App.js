import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

import Card from './Card.js'
import Panel from './Panel.js'

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

    const [selection, setSelection] = useState(null);

    const [wantPanel, setWantPanel] = useState(false);

    const handleCardClick = (show) => {
        setWantPanel(true);
        setSelection(show);
    }

    const handlePanelClick = () => {
        setWantPanel(false);
    }

    return (
        <Container>
            {SHOWS.map(show => (
                <Card
                    key={show.id}
                    image={show.image}
                    onClick={() => handleCardClick(show)}
                    title={show.title}
                />
            ))}
            <Panel
                onClick={handlePanelClick}
                visible={wantPanel}
                show={selection}>
            </Panel>
        </Container>
  );
}

export default App;
