require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  describe('routes', () => {

    test('returns location data', async() => {

      const expectation = {
        'formatted_query': expect.any(String),
        'latitude': expect.any(String),
        'longitude': expect.any(String)
      };

      const data = await fakeRequest(app)
        .get('/location/?search="Seattle"')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('returns weather data', async() => {

      const expectation = [
        {
          'forecast': expect.any(String),
          'time': expect.any(String)
        },
        {
          'forecast': expect.any(String),
          'time': expect.any(String)
        },
        {
          'forecast': expect.any(String),
          'time': expect.any(String)
        },
        {
          'forecast': expect.any(String),
          'time': expect.any(String)
        },
        {
          'forecast': expect.any(String),
          'time': expect.any(String)
        },
        {
          'forecast': expect.any(String),
          'time': expect.any(String)
        },
        {
          'forecast': expect.any(String),
          'time': expect.any(String)
        }
      ];
  

      const data = await fakeRequest(app)
        .get('/weather?latitude=38.123&longitude=-78.543')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test ('returns yelp data', async() => {

      const expectation = {
        'image_url': expect.any(String),
        'name': expect.any(String),
        'rating': expect.any(Number),
        'url': expect.any(String),
        'price': expect.any(String)
      };

      const data = await fakeRequest(app)
        .get('/reviews/?latitude=40.7128&longitude=74.0060')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toContainEqual(expectation);
    });
  });
});
