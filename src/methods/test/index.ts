function hello(who: any) {
    return 'Привет' + who
}

let privet = hello('Vasa');


let name = (who: any) => 'Привет' + who;

import axios from "axios";

let getData = (ph: string) => axios.get(ph)

let getDataMain = (url: string, apiCRUD: object) => axios.get(url, apiCRUD)

export const usePrivet = {
    privet,
    name,
    getData,
    getDataMain
}
