import { combineReducers } from 'redux';
import liveReducer from './liveReducer';

export default combineReducers({
  live: liveReducer,
});
