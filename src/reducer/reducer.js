const  reducer = (state, action) =>{
    switch(action.type){
        case "UPDATE_TEXT":
        
            return {...state, screenText:action.value}
            
        case "CLEAR_TEXT":
            
            return {...state, screenText:action.value}
        
        case 'DEL_TEXT':
            return {...state, screenText:action.value}

        case 'CLOSE_ROUND':
            return {...state, screenText:action.value}
        case 'OPEN_ROUND':
            return {...state, screenText:action.value}
        case 'IS_OPEN':
            return {...state, isOpen: action.value}

        default:
            return state
    }
}

export default reducer