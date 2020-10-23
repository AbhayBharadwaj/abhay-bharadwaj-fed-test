import axios from 'axios'

  export const getUsers = () => async dispatch => {
    
    try{
      console.log('action called');
        const res = await axios.get(`https://randomuser.me/api/`)
        dispatch( {
            type: "GET_USERS",
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: "USERS_ERROR",
            payload: console.log(e),
        })
    }

}