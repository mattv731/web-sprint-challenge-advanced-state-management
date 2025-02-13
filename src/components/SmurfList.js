import React from 'react';
import Smurf from './Smurf';
import { connect } from "react-redux";


 const SmurfList = ({ smurfs, loading })=> {
    const isLoading = loading;
    const testSmurf = smurfs

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {testSmurf.map(item => {
            return <Smurf smurf={item} key={item.id}/> 
        })}
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        error: state.error
      }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.