import axios from 'axios'
import { bindActionCreators } from 'redux'



export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'
export const POST_SMURFS = 'POST_SMURFS'
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS'
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE'


export const fetchSmurfs = () => {
    return (dispatch) =>{

    dispatch({type: FETCH_SMURFS})

    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch (err => {
        dispatch({type: FETCH_SMURFS_FAILURE, payload: err.message})
    })
}
}

export const postSmurfs = () => {
    return(dispatch) => {
        dispatch({type: POST_SMURFS})

        axios.post('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: POST_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: POST_SMURFS_FAILURE, payload: err.message})
        })
    }
}



