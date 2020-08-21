import * as TYPES from './types';

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();
//
//     const res = await fetch('/logs');
//     const data = await res.json();
//
//     dispatch({
//       type: TYPES.GET_LOGS,
//       payload: data,
//     });
//   }
// }

export const getLogs = () => async dispatch => {
   try {
     setLoading();

     const res = await fetch('/logs');
     const data = await res.json();

     dispatch({
       type: TYPES.GET_LOGS,
       payload: data,
     });
   }
   catch (e){
     dispatch({
       type: TYPES.LOGS_ERROR,
       payload: e.response.data,
     });
   }
}

export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING
  }
}
