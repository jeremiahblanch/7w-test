import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

import Card from './Card.js'
import Panel from './Panel.js'

import mocks from './mocks.js'


const Container = styled.div`
    align-items: stretch;
    background-color: #000;
  display: flex;
  flex-direction: column;
  padding: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    }

`;

const App = () => {
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
            {mocks.map(show => (
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
