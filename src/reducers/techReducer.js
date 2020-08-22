import * as TYPES from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };



    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };


    default:
      return state;
  }
}
