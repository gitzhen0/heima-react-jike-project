import { createSlice } from '@reduxjs/toolkit'
import { request, getToken, setToken as _setToken, removeToken } from '@/utils'

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.userInfo = {}
      state.token = ''
      removeToken()
    }
  }
})


const { setToken, setUserInfo, clearUserInfo } = userStore.actions

const userReducer = userStore.reducer


const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    dispatch(setToken(res.data.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('/user/profile')
    dispatch(setUserInfo(res.data.data))
  }
}

export { setToken, fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer