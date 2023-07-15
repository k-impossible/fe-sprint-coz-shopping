import axios from 'axios';

let URL = "http://cozshopping.codestates-seb.link/api/v1/products";

export function getData(count){
    if(count) URL += `?count=${count}`;

    let result = axios.get(URL)
    .then((res)=>res.data)
    .then((data)=>{
        const bookmarkList = getLocalStorage();
        return data.map((el)=>{
            return {...el, bookmark: false}
        }).map((el)=>{
            if(bookmarkList.length !== 0){
                for(let value of bookmarkList){
                    if(el.id === value.id){
                        return {...el, bookmark: true}
                    }
                }
            }
            
            return el;
        })
    })
    .catch((error)=>{console.log(error)})

    return result;
}

export function getLocalStorage(count){
    const json = window.localStorage.getItem("bookmarkList");
    let bookmarkList = JSON.parse(json) || [];

    if(count !== undefined){
        bookmarkList = bookmarkList.slice(0, count)
    }
    return bookmarkList;
}

export function setLocalStorage(list){
    window.localStorage.setItem("bookmarkList",JSON.stringify(list));
}