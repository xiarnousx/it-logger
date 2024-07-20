import { ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR } from "../actions/types";

const initState = {
    techs: [],
    loading: false,
    error: null,
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: true }
        case GET_TECHS:
            return { ...state, techs: action.payload, loading: false }
        case ADD_TECH:
            return { ...state, techs: [...state.techs, action.payload], loading: false }
        case TECHS_ERROR:
            return { ...state, error: action.payload, loading: false }
        case DELETE_TECH:
            return { ...state, techs: state.techs.filter(t => t.id !== action.payload) }
        default:
            return state;
    }
}