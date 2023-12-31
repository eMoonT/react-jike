import { createSlice } from "@reduxjs/toolkit";
import { getToken,removeToken, setToken as _setToken } from "@/utils";
import { getUserInfoApi, loginApi } from "../../apis/user";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      _setToken(action.payload);
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    cleanUserInfo: (state) => {
      state.userInfo = {}
      state.token = ''
      removeToken()
    }
  },
});

const { setToken, setUserInfo, cleanUserInfo } = userStore.actions;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginApi(loginForm)
    dispatch(setToken(res.data.token));
  };
};

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getUserInfoApi()
    dispatch(setUserInfo(res.data));
  };
};

export { fetchLogin, fetchUserInfo, cleanUserInfo };

const userReducer = userStore.reducer;

export default userReducer;
