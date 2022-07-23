import { SHOW_GAMES } from "../actions";
const initialState = {
    games: []
}

export function showGames(state = initialState,action: { type: any; payload: any; }){
    switch (action.type) {
        case SHOW_GAMES:
            // console.log('show games')
            return Object.assign({},state,{games:action.payload})
        default:
            return state;
    }
}