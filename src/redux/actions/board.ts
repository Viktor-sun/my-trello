import { createAsyncActions } from "../../utils/redux-tools";

const fetchBoard = createAsyncActions("board/fetchBoard");
const createColumn = createAsyncActions("board/createColumn");
const deleteColumn = createAsyncActions("board/deleteColumn");

const addCard = createAsyncActions("card/addCard");

const fetchLabels = createAsyncActions("card/fetchLabels");
const addLabel = createAsyncActions("card/addLabel");
const fetchColumns = createAsyncActions("columns/fetchColumns");
const changeCardOwner = createAsyncActions("card/changeCardOwner");

// eslint-disable-next-line
export default {
  fetchBoard,
  createColumn,
  addCard,
  deleteColumn,
  fetchLabels,
  addLabel,
  fetchColumns,
  changeCardOwner,
};
