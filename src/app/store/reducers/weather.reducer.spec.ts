import { WeatherReducer, initialState } from './weather.reducer';

describe('City Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = WeatherReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
