import * as TYPES from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TYPES.GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
