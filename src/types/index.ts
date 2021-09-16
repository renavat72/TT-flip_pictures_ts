export interface DataItem {
    id:string;
    download_url:string;
    author:string;
    like?:boolean;
  }
  export interface DataState {
    data: DataItem[];
    loading: boolean;
    error: null | string;
  }
  export enum DataActionTypes {
    FETCH_DATA = "FETCH_DATA",
    FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCES",
    FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
  }
  
  interface FetchDataAction {
    type: DataActionTypes.FETCH_DATA;
  }
  interface FetchDataSuccesAction {
    type: DataActionTypes.FETCH_DATA_SUCCESS;
    payload: [];
  }
  interface FetchDataSuccesError {
    type: DataActionTypes.FETCH_DATA_ERROR;
    payload: string;
  }
  
  export interface GridItems {
    [key: string]: any;
    children?: GridItems[];
  }
  
  export type DataAction =
    | FetchDataAction
    | FetchDataSuccesAction
    | FetchDataSuccesError;
  