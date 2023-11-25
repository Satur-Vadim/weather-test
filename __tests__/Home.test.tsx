import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../pages/index';
import { TCity } from '../src/pages/Home/interfaces/TCity';
import HomeView from '../src/pages/Home/HomeView';
import { getCities } from '../src/api/home';

describe('Home', () => {
  it('renders Search input', () => {
    render(<Home />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
  it('renders homepage unchanged', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('adds item to localStorage on click', () => {
    localStorage.clear();

    const cities: TCity[] = [{
      id: 1,
      name: 'London',
      region: 'City of London',
      country: 'United Kingdom',
      lat: 51.52,
      lon: -0.11,
      url: 'test',
    }];

    React.useState = jest.fn().mockReturnValue([cities, {}]);

    render(<HomeView
      foundCities={cities}
      onSelectCity={() => localStorage.setItem('historySearch', JSON.stringify([cities[0].id]))}
      search={cities[0].name}
      setSearch={() => {}}
      weather={undefined}
      weatherHistory={[]}
    />);

    const listItem = screen.getByRole('button', { name: /London/i });
    fireEvent.click(listItem);

    const storedHistory = JSON.parse(localStorage.getItem('historySearch') as string) as number[];

    expect(storedHistory).toContain(cities[0].id);
  });
});

describe('getCities', () => {
  describe('when API call is successful', () => {
    it('should return cities list', async () => {
      const cities = [
        {
          id: 2801268,
          name: 'London',
          region: 'City of London, Greater London',
          country: 'United Kingdom',
          lat: 51.52,
          lon: -0.11,
          url: 'london-city-of-london-greater-london-united-kingdom',
        },
        {
          id: 315398,
          name: 'London',
          region: 'Ontario',
          country: 'Canada',
          lat: 42.98,
          lon: -81.25,
          url: 'london-ontario-canada',
        },
      ];
      const result = await getCities('london');

      expect(result[0]).toMatchObject(cities[0]);
      expect(result).toEqual(cities);
    });
  });
});
