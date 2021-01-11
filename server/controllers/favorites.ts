const favoritesCities = {
  'SAN FRANCISCO': 'SAN FRANCISCO'
};

export const getFavorites = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    if (Object.keys(favoritesCities).length !== 0) {
      resolve(Object.keys(favoritesCities));
    } else {
      reject('No favorite city added yet');
    }
  });
};

export const addFavorites = (cityName: string): Promise<unknown> => {
  cityName = cityName.toUpperCase();
  return new Promise((resolve, reject) => {
    if (!favoritesCities[cityName]) {
      favoritesCities[cityName] = cityName;
      resolve('City added correctly');
    } else {
      reject('City already added');
    }
  });
};