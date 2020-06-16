import {API} from '../../config';

export const authenticate = (data, next) => {
    if(typeof window !== undefined){
        localStorage.setItem("jwt",JSON.stringify(data));
        next();
    }
}

export const isAuthenticated = () => {
    if(typeof window === undefined){
        return false;
    } 
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }else{
        return false;
    }
}

export const signOut = (next) => {
    if(typeof window !== undefined){
        localStorage.removeItem("jwt");
        next();
        return fetch(`${API}/employer/logout`)
            .then((response)=>{
                console.log("logout "+response);
            }).catch((err)=>{
                console.log(err);
            })

    } 
}
