function locationMunger3000(data) {
  return {
    'formatted_query': data.body[0].display_name,
    'latitude': data.body[0].lat,
    'longitude': data.body[0].lon
  };
}

function weatherMungerGames(data) {
  const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let returnArr = [];

  for (let i = 0; i < 7; i++) {
    const rawDate = new Date(data[i].datetime);
    const mungedDay = dayArr[rawDate.getDay()];
    const mungedMonth = monthArr[rawDate.getMonth()];
    const mungedDate = rawDate.getDate();
    const mungedYear = rawDate.getFullYear();
    const timeString = mungedDay + ', ' + mungedMonth + ' ' + mungedDate + ', ' + mungedYear;
  
    returnArr = [...returnArr, {
      'forecast': data[i].weather.description,
      'time': timeString
    }];
  }

  return returnArr;
}

function yelpMunger5stars(data) {
  const mungedData = data.map(business => {
    return {
      'name': business.name,
      'image_url': business.image_url,
      'price': business.price,
      'rating': business.rating,
      'url': business.url
    };
  });

  return mungedData;
}

module.exports = {
  locationMunger3000,
  weatherMungerGames,
  yelpMunger5stars
};