import { SET_USER } from './user.types'

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user
})