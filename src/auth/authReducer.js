import { Types } from "../types/types";

// const state = {
//   nombre: 'Sebastian',
//   logged: true
// }'

// const loginAction = {
//   type: Types.login,
//   payload: {
//     name: 'Sebastian',
//     email: 'sebastian@gmail.com'
//   }
// }


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.login:
      return {
        ...action.payload,
        logged: true
      }
    
    case Types.logout:
      return {
        logged: false
      }
  
    default:
      return state;
  }
}