export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item :null,
    
    //token: 'BQB6EKodlSo0IGK-D7Zz5bIAUo0cYNxe4kZ18bRJSXJ0p61eHO_w0S0WKd2GpCufnPgv0mb4ubJLQpunT0kFOEMjA_ctJQIwwFwiVm1aggHu8DAUJviPwta5UnBhyrc_GumnvY5ftM7War34Lf7RemXp925YXaR9vI81P-xw0B_6uefN',
};

const reducer = (state,action)=>{
console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            } 
        case 'SET_PLAYLISTS': 
        return{
            ...state,
            playlists:action.playlists,
        } ;  
        case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly:action.discover_weekly,
        }
        default:
            return state;
    }
}

export default reducer; 