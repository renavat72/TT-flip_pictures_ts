import { Dispatch } from "redux";
import { DataAction, DataActionTypes } from "../../types";

export const fetchData = () => async (dispatch: Dispatch<DataAction>) => {
  try {
    dispatch({ type: DataActionTypes.FETCH_DATA });
      await fetch('https://picsum.photos/v2/list')
            .then(response => {
                return response.json();
            })
            .then(responseJson =>{
                dispatch({
                  type: DataActionTypes.FETCH_DATA_SUCCESS,
                  payload: responseJson,
                });
            })
  } catch (e) {
    dispatch({
      type: DataActionTypes.FETCH_DATA_ERROR,
      payload: "Loading is error",
    });
  }
};
