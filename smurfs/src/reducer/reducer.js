import {FETCH_SMURFS, FETCH_SMURFS_SUCCESS} from '../actions/actions'


export const initialState = {
    smurfs: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS: 
        return{ 
            ...state, 
        }
        case FETCH_SMURFS_SUCCESS: 
        return{
            ...state,
            smurfs: action.payload
        }
        // case ADD_SMURF:
        // return{
        //     ...state
        // }
    //     case ADD_SMURF: 
    //     return[
    //         ...state,
    //         {
    //         name: action.payload,
    //         age: action.payload,
    //         height: action.payload
    //     }
    // ]

        default: 
        return state
    }
}
