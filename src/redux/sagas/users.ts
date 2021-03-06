import { put, takeEvery, call } from "redux-saga/effects";
import { usersActions } from "../actions";
import { IAction } from "../../interfaces";
import axios, { AxiosResponse } from "axios";
import { customApi } from "../../helpers/axios";

interface ICredentials {
  login: string;
  password: string;
}

const api = (route: string, action: IAction<ICredentials>) =>
  axios.post(
    `http://localhost:8050/api/users${route}`,
    {
      name: action.payload.login,
      password: action.payload.password,
    },
    { withCredentials: true }
  );

export function* logupWorker(action: IAction<ICredentials>) {
  try {
    const data: AxiosResponse = yield call(api, "/signup", action);
    yield put(usersActions.logup.Success(data.data.data.user));
  } catch (error: any) {
    yield put(usersActions.logup.Error(error.message));
  }
}

export function* loginWorker(action: IAction<ICredentials>) {
  try {
    const data: AxiosResponse = yield call(api, "/login", action);
    localStorage.setItem("token", data.data.data.accessToken);

    yield put(usersActions.login.Success(data.data.data));
  } catch (error: any) {
    yield put(usersActions.login.Error(error.message));
  }
}

export function* logoutWorker() {
  try {
    yield call(customApi.post, "/users/logout");
    localStorage.removeItem("token");
    yield put(usersActions.logout.Success());
  } catch (error: any) {
    yield put(usersActions.logout.Error(error.message));
  }
}

export function* currentUserWorker() {
  try {
    const data: AxiosResponse = yield call(customApi.get, "/users/current");
    yield put(usersActions.currentUser.Success(data.data.data.user));
  } catch (error: any) {
    yield put(usersActions.currentUser.Error(error.message));
  }
}

export function* usersWatcher() {
  yield takeEvery(usersActions.logup.Request.type, logupWorker);
  yield takeEvery(usersActions.login.Request.type, loginWorker);
  yield takeEvery(usersActions.logout.Request.type, logoutWorker);
  yield takeEvery(usersActions.currentUser.Request.type, currentUserWorker);
}
