import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {postSmurfs} from '../actions/actions'

function AddSmurf (props){
 
    const initialValue = {
        name: '',
        age: '', 
        height: '',
    }
    const [value, setValue] = useState(initialValue)


    const onChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        // e.preventDefault()
        props.postSmurfs(value)
    }
    return(
        <div>
        <h2>New Smurf Info</h2>
        <form onSubmit = {onSubmit}>
            <label>Name:
                <input
                    type = 'text'
                    name = 'name'
                    value = {value.name}
                    onChange = {onChange}
                />
            </label>
            <label>Age:
                <input
                    type = 'text'
                    name = 'age'
                    value = {value.age}
                    onChange = {onChange}
                />
            </label>
            <label>Height:
                <input
                    type = 'text'
                    name = 'height'
                    value = {value.height}
                    onChange = {onChange}
                />
            </label>
            <button>Add New Smurf</button>
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error
}}

export default connect(mapStateToProps,{postSmurfs}) (AddSmurf)
