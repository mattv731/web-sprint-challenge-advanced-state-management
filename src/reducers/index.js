import { FETCH_SMURF, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ADD_ERROR } from '../actions/index';

const initialState = {
    smurfs: [{
        id:"9999",
        name:'Test Smurf',
        position:'Villager',
        nickname: 'Sam',
        description: 'This is Sam'
      }],
    loading: false,
    error: ''
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case(FETCH_SMURF):
            return({
                ...state,
                smurfs: state.smurfs,
                loading: true,
                error: state.error
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                smurfs: action.payload,
                loading: false,
                error: state.error
            })
        case(FETCH_FAIL):
            return({
                ...state,
                smurfs: state.smurfs,
                loading: false,
                error: action.payload
            })
        case(ADD_SMURF):
                const newSmurf = {
                    id: Date.now,
                    name: action.payload.name,
                    position: action.payload.position,
                    nickname: action.payload.nickname,
                    description: action.payload.description
                }
                return({
                ...state,
                smurfs: [...state.smurfs, newSmurf],
                loading: false,
                error: ''
            })
        case(ADD_ERROR):
            return({
                ...state,
                smurfs: state.smurfs,
                loading: false,
                error: [...state.error, action.payload]
            })
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//


//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.