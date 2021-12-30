import { boardActions } from "../actions";
import { IBoardState, IAction } from "../../interfaces";

type TActionTypes = string | [];

const initialState: IBoardState = {
  title: "",
  error: null,
  columns: [],
};

const boardReducer = (state = initialState, action: IAction<TActionTypes>) => {
  switch (action.type) {
    case boardActions.changeTitle.Success.type:
      return { ...state, title: action.payload };

    case boardActions.createColumn.Success.type:
      return {
        ...state,
        columns: [...state.columns, { title: action.payload, todos: [] }],
      };
    case boardActions.changeTitle.Error.type:
      return { ...state, error: action.payload };
    case boardActions.createColumn.Error.type:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default boardReducer;