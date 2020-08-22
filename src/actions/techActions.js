import * as TYPES     from './types';
import { setLoading } from './logActions';


export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: TYPES.GET_TECHS,
      payload: data,
    });
  }
  catch (e){
    dispatch({
      type: TYPES.TECHS_ERROR,
      payload: e.response.statusText,
    });
  }
}
