import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

import Card from './Card.js'
import Panel from './Panel.js'

import mocks from './mocks.js'
const BRAND_IMG_URL = '7plus.png';

const cardClass = Card({}).type.styledComponentId;
const panelClass = Panel({}).type.styledComponentId;

// helper functions
const initiatePanelForCardAtIndex = (cardIndex) => {
    const card = document.getElementsByClassName(cardClass)[cardIndex];
    const panel = document.getElementsByClassName(panelClass)[0];

    fireEvent.click(card);

    return {
        card,
        panel,
        panelCard: panel.getElementsByClassName(cardClass)[0],
    };
}

const getImagesFromCard = (card) => {
    const imgs = card.getElementsByTagName('img');

    // Just using array indexes below this will break if the order of the elements changes.
    // If we were going to use re-usable styled components for the actual image and brand elements,
    // then we could define imgClass and brandClass at the top (like we did with cardClass, panelClass)
    // and use those selectors to find the return the correct elements
    return {
        content: imgs[0],
        brand: imgs[1],
    }
}

const expect_cardHasBrandAndImg = (card, imageUrl) => {
    const { brand, content } = getImagesFromCard(card);

    expect(content).toHaveAttribute('src', expect.stringContaining(imageUrl));
    expect(brand).toHaveAttribute('src', expect.stringContaining(BRAND_IMG_URL));
}


// Tests
test('renders images as cards', () => {
    render(<App />);
    const cards = document.getElementsByClassName(cardClass);

    Array.from(cards).forEach((card, index) => {
        expect_cardHasBrandAndImg(card, mocks[index].image); // we want the images to show in the same order a the mocks
    });
});

test('clicking a card shows the panel and shows selected card in the panel', () => {
    render(<App />);
    const { card, panel, panelCard } = initiatePanelForCardAtIndex(0);
    expect(panel).toBeVisible();
    expect_cardHasBrandAndImg(panelCard, unescape(getImagesFromCard(card).content.attributes.src.value));
});

test('clicking panel card closes panel', () => {
    render(<App />);
    const { panel, panelCard } = initiatePanelForCardAtIndex(0);
    expect(panel).toBeVisible();
    fireEvent.click(panelCard);
    expect(panel).toHaveStyle('transform: translateX(-100%)');
});

