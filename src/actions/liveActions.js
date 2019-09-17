import axios from 'axios';
import { GET_LIVE } from '../types';

export default getLive = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/dummy").then((res) =>
    dispatch({
      type: GET_LIVE,
      payload: res.data
    })
};
