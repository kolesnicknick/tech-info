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
       payload: e.response.statusText,
     });
   }
}

export const searchLogs  = ( text ) => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: TYPES.SEARCH_LOGS,
      payload: data,
    });
  }
  catch (e){
    dispatch({
      type: TYPES.LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
}

export const addLog = ( log ) => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log),
    });
    const data = await res.json();

    dispatch({
      type: TYPES.ADD_LOG,
      payload: data,
    });
  }
  catch (e){
    dispatch({
      type: TYPES.LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
}

export const updateLog = ( log ) => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log),
    });
    const data = await res.json();

    dispatch({
      type: TYPES.UPDATE_LOG,
      payload: data,
    });
  }
  catch (e){
    dispatch({
      type: TYPES.LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
}

export const deleteLog = ( id ) => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    dispatch({
      type: TYPES.DELETE_LOG,
      payload: id,
    });
  }
  catch (e){
    dispatch({
      type: TYPES.LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
}

export const setCurrent = (log) => {
  return {
    type: TYPES.SET_CURRENT,
    payload: log,
  }
}

export const clearCurrent = () => {
  return {
    type: TYPES.CLEAR_CURRENT,
  }
}



export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING
  }
}
