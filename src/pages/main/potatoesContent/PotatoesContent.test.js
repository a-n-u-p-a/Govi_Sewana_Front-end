import React from 'react';
import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PotatoesContent from './PotatoesContent/'; // Adjust the import path as necessary
import commonConfig from '../../../config/commonConfig.json'; // Adjust the import path as necessary

// Mocking the external modules and browser storage
jest.mock('../../../config/commonConfig.json', () => ({
  ENG: {
    SOIL: 'Soil',
    DISTANCE_PLANTS_AND_PLANTING_SEEDS: 'Distance and Planting Seeds',
    FERTILIZING: 'Fertilizing',
    RECOMMENDED_SPECIES: 'Recommended Species',
    DISEASES_AND_PESTICIDES: 'Diseases and Pesticides',
    HARVESTING: 'Harvesting'
  }
}));

beforeEach(() => {
  // Mocking localStorage and sessionStorage
  Storage.prototype.getItem = jest.fn((key) => {
    if (key === 'selectedLanguage') return 'ENG';
    if (key === 'cultivationContent') return 'Potato Cultivation';
  });
  Storage.prototype.setItem = jest.fn();
  jest.clearAllMocks(); // Clears any previous mocking behavior
});

describe('PotatoesContent Component', () => {
  it('should render correctly based on sessionStorage', () => {
    const { getByText } = render(<PotatoesContent onChangePage={() => {}} />);
    expect(getByText('Potato Cultivation')).toBeInTheDocument();
  });

  it('updates session storage and calls onChangePage when a category is selected', () => {
    const mockOnChangePage = jest.fn();
    const { getByText } = render(<PotatoesContent onChangePage={mockOnChangePage} />);

    fireEvent.click(getByText(commonConfig.ENG.SOIL));
    expect(sessionStorage.setItem).toHaveBeenCalledWith('selectTips', 'SOIL');
    expect(mockOnChangePage).toHaveBeenCalledWith('PotatoesDetail');

    fireEvent.click(getByText(commonConfig.ENG.FERTILIZING));
    expect(sessionStorage.setItem).toHaveBeenCalledWith('selectTips', 'FERTILIZING');
    expect(mockOnChangePage).toHaveBeenCalledWith('PotatoesDetail');
  });

  // Add more tests as needed for other interactions and behaviors
});
