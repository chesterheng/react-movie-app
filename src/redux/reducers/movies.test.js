import { GET_MOVIES } from '../../constants/actionTypes';
import moviesReducer from './movies';

const initialState = [];

describe('MovieReducer', () => {
  it('should return initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });

  it('should have 1 movie if GET_MOVIES action fired with same item as payload', () => {
    const mockItem = [
      {
        id: '59810bd4-f08f-4554-a127-345123c585fe',
        name: 'Deadpool', 
        productionYear: 2016, 
        genre: 'Action', 
        synopsisShort: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.', 
        image: 'image1.jpg'
      }
    ]

    const mockPrevState = [];

    expect(
      moviesReducer(mockPrevState, {
        type: GET_MOVIES,
        payload: mockItem
      }).length
    ).toBe(1);
  });

});
