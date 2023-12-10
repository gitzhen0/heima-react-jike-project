import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'

const userStore = createSlice({
  name: "user",
  initialState: {
    token: ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    }
  }
})


const { setToken } = userStore.actions

const userReducer = userStore.reducer


const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    console.log(res.data.data.token)
    dispatch(setToken(res.data.data.token))
  }
}

export { setToken, fetchLogin }

export default userReducer