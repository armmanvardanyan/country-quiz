import { LOGGED,ERROR,LOGGED_OUT } from "../types";

export const authReducer = (state,action) => {
    switch (action.type) {
        case LOGGED:
            return {...state,logged:true,token:action.token,error:null}
        case ERROR:
            return {...state,logged:false,token:null,error:action.payload}
        case LOGGED_OUT:
            return {...state,logged:false,token:null,error:null}
        default:
            return state
    }
}