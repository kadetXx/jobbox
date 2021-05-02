import { SET_USER } from './user.types'
const initialState = {
  uid: null,
  accountType: ""
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