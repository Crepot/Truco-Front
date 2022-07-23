const axios = require('axios');

export function newGame(token:string){
    return new Promise(async (resolve,reject) => {
        const url =`${process.env.REACT_APP_API_URL}/game`;
        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        let data = {  
            status_game:0
        };
        
        axios.post(url,data,{headers}).then((res:{data:object})=> {
            resolve(res.data);
        }).catch((err:object)=> {
            console.log('ERROR => ',err)
            reject(err)

        })
    });

};

// module.exports = {newGame};
