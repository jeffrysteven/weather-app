export const citiesWeatherMock: any = {
  cnt: 2,
  list: [
    {
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 17.26,
        feels_like: 12.87,
        temp_min: 16.67,
        temp_max: 18,
        humidity: 55,
      },
      wind: {
        speed: 5.66,
        deg: 210,
      },
      dt: 1615471780,
      id: 3117735,
      name: 'Madrid',
    },
    {
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      main: {
        temp: 10.17,
        feels_like: 0.43,
        temp_min: 9.44,
        temp_max: 11.11,
        humidity: 71,
      },
      wind: {
        speed: 12.35,
        deg: 250,
      },
      dt: 1615471793,
      id: 2759794,
      name: 'Amsterdam',
    },
  ],
};

export const cityWeatherMock: any = {
  city: {
    id: 3117735,
    name: 'Madrid',
    coord: {
      lat: 40.4165,
      lon: -3.7026,
    },
    country: 'ES',
    population: 0,
    timezone: 3600,
    sunrise: 1615444374,
    sunset: 1615486614,
  },
  cnt: 3,
  list: [
    {
      dt: 1615485600,
      main: {
        temp: 16.75,
        feels_like: 13.05,
        temp_min: 15.43,
        temp_max: 16.75,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 945,
        humidity: 56,
        temp_kf: 1.32,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 4.6,
        deg: 274,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-03-11 18:00:00',
    },
    {
      dt: 1615496400,
      main: {
        temp: 13.56,
        feels_like: 10.19,
        temp_min: 12.34,
        temp_max: 13.56,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 947,
        humidity: 62,
        temp_kf: 1.22,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 3.63,
        deg: 272,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-03-11 21:00:00',
    },
    {
      dt: 1615507200,
      main: {
        temp: 10.99,
        feels_like: 8.09,
        temp_min: 10.51,
        temp_max: 10.99,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 946,
        humidity: 75,
        temp_kf: 0.48,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 81,
      },
      wind: {
        speed: 3.06,
        deg: 246,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-03-12 00:00:00',
    },
  ],
};
