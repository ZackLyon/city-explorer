// const fakeRequest = require('supertest');
// const app = require('../lib/app');
const body = require('../data/location-data.js');
const weatherData = require('../data/weather-data.js');
const yelpData = require('../data/yelp-data.js');

const { locationMunger3000, weatherMungerGames, yelpMunger5stars } = require('../lib/request-utils.js');

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

    test('yelp munger function test', async() => {

      const expectation = [
        {
          'name': 'Clean Clutter Junk Removal and Demolition',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/a-cwBydhY4H6FrKPI-9Yag/o.jpg',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/clean-clutter-junk-removal-and-demolition-hawthorne?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'In Living Stereo',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/00xFzbAvTfv_y6iJh6i8bw/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/in-living-stereo-new-york?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'Copyland Center',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/IQB_h--P_mjBMk9Xu4-W_Q/o.jpg',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/copyland-center-new-york-3?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'Bang & Olufsen',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/q8ZPRn5oCHGjCdpz85WPZw/o.jpg',
          'price': '$$$$',
          'rating': 2,
          'url': 'https://www.yelp.com/biz/bang-and-olufsen-new-york-4?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'Jersey City Florist',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/2X04ekTNH5_o2wWRjv56Og/o.jpg',
          'price': '$$',
          'rating': 2.5,
          'url': 'https://www.yelp.com/biz/jersey-city-florist-jersey-city-4?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'JD Optical Center',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/B_ccGstVB1KzVPP2izLlGg/o.jpg',
          'price': '$$',
          'rating': 3.5,
          'url': 'https://www.yelp.com/biz/jd-optical-center-jackson-heights?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'NY Kids Club',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/blL0dYZs_lC6PhJExI_4Dg/o.jpg',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/ny-kids-club-new-york-22?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'Bryant Park Reading Room',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/49a0AFZpovDbyWH13BYnkQ/o.jpg',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/bryant-park-reading-room-new-york?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'Miracle Wigs & Hair',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5bsaJTFoC0zbERIPqgQl6g/o.jpg',
          'price': '$$',
          'rating': 3.5,
          'url': 'https://www.yelp.com/biz/miracle-wigs-and-hair-bronx-3?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'Siwoo Salon',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/pKz86-lgvGPnR78dnVlUZQ/o.jpg',
          'price': '$$',
          'rating': 3.5,
          'url': 'https://www.yelp.com/biz/siwoo-salon-forest-hills?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'Bendix Diner',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/MBPxFLTya9bSAaUS4QaOow/o.jpg',
          'price': '$',
          'rating': 3.5,
          'url': 'https://www.yelp.com/biz/bendix-diner-hasbrouck-heights?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        },
        {
          'name': 'Chinatown Gourmet',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Nar2Y6a9eRRgVT_X3mxG5g/o.jpg',
          'price': '$$',
          'rating': 2.5,
          'url': 'https://www.yelp.com/biz/chinatown-gourmet-clifton-2?adjust_creative=fGfk_j1PAT1w6nYW5xMyiw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=fGfk_j1PAT1w6nYW5xMyiw'
        }
      ];

      const data = yelpMunger5stars(yelpData);

      expect(data).toEqual(expectation);
    });

  });
});
