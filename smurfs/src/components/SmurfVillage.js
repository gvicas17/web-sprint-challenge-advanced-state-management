import React, {useEffect} from 'react'
import {fetchSmurfs} from '../actions/actions'
import {connect} from 'react-redux'


function SmurfVillage (props){
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    return(
        <div>
            {props.isLoading ? <p>Loading Smurfs...</p> : null}
        {props.error ? <p>{props.error}</p> : null}
        <h2>Smurfs</h2>
        {props.smurfs.map(smurf => {
            return(
            <div>
                <h4>Name: {smurf.name}</h4>
                <h4>Age: {smurf.age}</h4>
                <h4>Height: {smurf.height}</h4>
            </div>
            )
        })}
        </div>
    )
}

const mapStateToProps = (state) => {
return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error
}}

export default connect(mapStateToProps,{fetchSmurfs})(SmurfVillage)