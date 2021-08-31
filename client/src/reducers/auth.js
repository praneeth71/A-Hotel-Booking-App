// { type: 'LOGGED_IN_USER', payload: {name: 'ryan', role: 'Seller'} }
export const authReducer = (state = {name: 'ryan', role: 'seller'}, action) => {
    switch(action.type) {
      case "LOGGED_IN_USER":
        return {...state, ...action.payload}
      case "LOGOUT":
        return action.payload
      default:
        return state;
    }
  };
