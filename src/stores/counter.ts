import {acceptHMRUpdate, defineStore} from 'pinia'

import {usePrivet} from "../methods/test";
import axios from "axios";

// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export const useCounter:any = defineStore("counter",{
    state: () => ({
        n: 1,
    }),

    actions: {
        changeMe() {
            this.n++;
        },
        async getPosts (){
            const { privet, name } = usePrivet;

            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(data)
            console.log(name('Victory'))
            console.log(name('Eugene'))
            console.log(uuidv4())
        }


    },

    getters: {
        double: (state: any) => state.n+2,
    },

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
