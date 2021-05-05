import { SET_USER } from './user.types'
const initialState = {
  uid: null,
}

const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      }
    
    default:
      return state
  }
}

export default userReducer