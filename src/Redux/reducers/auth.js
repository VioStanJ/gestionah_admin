import axios from 'axios';

const initialState = {
    admin : {
        full_name   : '',
        email       : '',
        id          : 0,
        id_number   : '',
        level       : 0, 
        avatar      : '',
        phone       :'',    
        birthday    : '',
        token       : '',
        credentials : false
    }
}

const authReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'ADMIN':
            localStorage.setItem('auth_gest_adm',JSON.stringify(action.payload));
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + action.payload.token;
            return {
                ...state,
                admin : action.payload
            };
        case 'BEARER':
            return {
                ...state,
                admin : localStorage.getItem('auth_gest_adm')
            }
        case 'OUT':
            localStorage.setItem('auth_gest_adm',JSON.stringify(initialState.admin));
            axios.defaults.headers.common['Authorization'] = null;
            return {
                ...state,
                admin : initialState.admin
            }
        default :
            return state;
    }
} 

export default authReducer;