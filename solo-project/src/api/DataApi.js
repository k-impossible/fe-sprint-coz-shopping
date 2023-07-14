import axios from 'axios';

let URL = "http://cozshopping.codestates-seb.link/api/v1/products";

export function getData(count){
    if(count) URL += `?count=${count}`;

    let result = axios.get(URL)
    .then((res)=>res.data)
    .catch((error)=>{console.log(error)})

    return result;
}