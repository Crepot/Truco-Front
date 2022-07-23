import getGames from '../api/games/getGames'

export const SHOW_GAMES ='SHOW_GAMES' 
export const SHOW_CURRENT_GAME ='SHOW_CURRENT_GAME'


export function showGames(token:string) {
    return (dispatch:any, getState:any) => {
        getGames(token).then((res:any)=>{
            console.log('res.data.games => ',res.data);
            dispatch({type: SHOW_GAMES, payload:res.data.games});
        }).catch((err) => {
            console.log(err)
        })
    }
}
