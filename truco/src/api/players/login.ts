const axios = require('axios');
const _ = require('lodash')

export function login(email:string,password:string){
    return new Promise(async (resolve,reject) => {
        email = _.toLower(email)
        // console.log('process.env.REACT_APP_API_URL = ',process.env.REACT_APP_API_URL)
        const url =`${process.env.REACT_APP_API_URL}/authenticate`;
        let config = {   
            email:email,
            password:password 
        };


        axios.post(url,config,{headers: {"Access-Control-Allow-Origin": "*"}}).then((res:any)=> {
            //console.log('esta es la res => ',res)
            resolve(res);
        })
        .catch((err:object)=> {
            reject(err)
            console.log('ERROR => ',err)
        })
    });

};

// module.exports = {login};
