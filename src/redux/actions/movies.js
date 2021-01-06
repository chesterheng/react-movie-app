import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { GET_MOVIES } from '../../constants/actionTypes';

export const loadMovies = () => async dispatch => {
  try {
    const { data: movies } = await axios.get("https://sometimes-maybe-flaky-api.gdshive.io");
    const newMovies = movies.map(movie => ({ id: uuidv4(), ...movie,  }) );
    dispatch({
      type: GET_MOVIES,
      payload: newMovies
    })
  } catch (error) {
    console.log(error);
  }
}
