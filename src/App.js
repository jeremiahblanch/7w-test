import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './Card.js'
import Panel from './Panel.js'

import mocks from './mocks.js'


const Container = styled.div`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    padding: 8px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
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
                show={selection}
                visible={wantPanel}
            />
        </Container>
  );
}

export default App;
