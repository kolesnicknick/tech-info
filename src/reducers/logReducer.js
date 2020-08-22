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
    case TYPES.ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case TYPES.DELETE_LOG:
      return {
        ...state,
        logs: [...state.logs].filter(log => log.id !== action.payload),
        loading: false,
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

    case TYPES.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    case TYPES.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }
    case TYPES.SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      }
    case TYPES.UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log),
      }
    default:
      return state;
  }
}
