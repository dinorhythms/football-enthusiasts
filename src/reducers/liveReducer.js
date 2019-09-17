import { GET_LIVE } from '../types';

const initialState = { live: 'Football' };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIVE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
