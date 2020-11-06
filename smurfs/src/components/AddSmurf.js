import React from 'react'

export const AddSmurf = () => {
    return(
        <div>
            <h2>New Smurf Info</h2>
            <form>
                <label>Name:
                    <input/>
                </label>
                <label>Age:
                    <input/>
                </label>
                <label>Height:
                    <input/>
                </label>
                <button>Add New Smurf</button>
            </form>
        </div>
    )
}