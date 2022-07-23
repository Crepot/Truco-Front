const axios = require('axios');

export function joinGame(token:string,gameId: number ){
    return new Promise(async (resolve,reject) => {
        //TODO: asigno el player a la tabla
        const url =`${process.env.REACT_APP_API_URL}/game/${gameId}/player`;

        let headers = {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
        };
        axios.patch(url,{},{headers}).then((res:any) => {
            console.log('\n ESTA ES LA RESPUESTA res.data => ',res.data)
            resolve(res.data);
        }).catch((err:any) => {
            reject(err);
        })
    });

};

