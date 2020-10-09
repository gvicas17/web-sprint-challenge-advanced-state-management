import Axios from 'axios'
import React, {useState} from 'react'
import "./App.css"


export const AddSmurfForm = () => {
    
    const [valueState, setValueState] = useState('')
    
    const onChange = (e) => {
        setValueState(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventdefault();
        setValueState('')
    }
    
    return(
        <div className = 'formContainer'>
            <h2>Add a new smurf!</h2>
            <form>
                <label>Name:
                <input
                    type = 'text'
                    name = 'name'
                    value = {valueState}
                    onChange = {onChange}
                />
                </label>
                <label>Age:
                <input
                    type = 'text'
                    name = 'age'
                    value = {valueState}
                    onChange = {onChange}
                />
                </label>
                <label>Height:
                <input
                    type = 'text'
                    name = 'height'
                    value = {valueState}
                    onChange = {onChange}
                />
                </label>
            </form>
        </div>
    )
}