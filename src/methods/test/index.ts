function hello(who: any) {
    return 'Привет' + who
}

let privet = hello('Vasa');


let name = (who: any) => 'Привет' + who;

import axios from "axios";

let getData = (ph: string) => axios.get(ph)

export const usePrivet = {
    privet,
    name,
    getData
}
