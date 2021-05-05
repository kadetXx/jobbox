import { SET_LOADING,SET_USER } from './user.types'

export const setLoading = (status: boolean) => ({
  type: SET_LOADING,
  payload: status
})

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user
})