export const getStore = (key) =>{
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) :[];
}
export const getUser = (key) =>{
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) :false;
}