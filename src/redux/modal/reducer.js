export function modalReducer(state = false, action ) {
    switch(action.type){
        case 'modal/open': {
            return state = true
        }

        case 'modal/close': {
            return state = false
        }

        default: return state

    }
}
