// const fakeRequest = require('supertest');
// const app = require('../lib/app');
const body = require('../data/location-data.js');
const weatherData = require('../data/weather-data.js');
const { locationMunger3000, weatherMungerGames } = require('../lib/request-utils.js');

describe('app routes', () => {
  describe('routes', () => {

    test('location munger function test', async() => {

      const expectation = {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624'
      };

      const data = locationMunger3000(body);

      expect(data).toEqual(expectation);
    });

    test('weather munger function test', async() => {

      const expectation = [
        { 'forecast': 'Overcast clouds', 
          'time': 'Wednesday, October 6, 2021' },
        { 'forecast': 'Broken clouds',
          'time': 'Thursday, October 7, 2021' },
        { 'forecast': 'Broken clouds',
          'time': 'Friday, October 8, 2021' },
        { 'forecast': 'Overcast clouds',
          'time': 'Saturday, October 9, 2021' },
        { 'forecast': 'Overcast clouds',
          'time': 'Sunday, October 10, 2021' },
        { 'forecast': 'Overcast clouds',
          'time': 'Monday, October 11, 2021' },
        { 'forecast': 'Few clouds',
          'time': 'Tuesday, October 12, 2021'
        }];

      const data = weatherMungerGames(weatherData.data);

      expect(data).toEqual(expectation);
    });

  });
});