import {acceptHMRUpdate, defineStore} from 'pinia'

// import { usePrivet } from "@/methods/testMethods";
import {usePrivet} from "../methods/test";

export const useCounter:any = defineStore({
    id: 'counter',

    state: () => ({
        n: 1,
    }),

    actions: {
        changeMe() {
            this.n++;
        },
        async getPosts (){
            const { privet, name } = usePrivet;

            // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(data)
            console.log(name('Victory'))
            console.log(name('Eugene'))
        }


    },

    getters: {
        double: (state: any) => state.n+2,
    },

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
