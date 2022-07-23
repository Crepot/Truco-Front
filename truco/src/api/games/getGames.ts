const axios = require('axios');
const _ = require('lodash')

export default function getGames(token: string){
    return new Promise(async (resolve,reject) => {
        const url =`${process.env.REACT_APP_API_URL}/game`;
        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };

        axios.get(url,{headers}).then((res:any)=> {
            resolve(res);
        }).catch((err:any)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};