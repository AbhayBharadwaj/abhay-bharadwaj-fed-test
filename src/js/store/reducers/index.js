const initialState = {
    userInfo: {}
  };
  
  function rootReducer(state = initialState, action) {
    console.log('reducer called',action);
    switch(action.type) {
      case 'GET_USERS':
        return{
        ...state,
        userInfo: action.payload
        }
        default: return state;
      }
    
  };
  
  export default rootReducer;