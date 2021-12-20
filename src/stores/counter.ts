import {acceptHMRUpdate, defineStore} from 'pinia'

import {usePrivet} from "../methods/test";
import axios from "axios";

// @ts-ignore
import {last, head} from 'lodash';

// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export const useCounter:any = defineStore("counter",{
    state: () => ({
        n: 1,
        axi: '',
        axiUsers: '',
        axiMain: ''
    }),

    actions: {
        changeMe() {
            this.n++;
        },
        async getPosts (){
            const { privet, name, getData, getDataMain } = usePrivet;

            const phPosts : string = 'https://jsonplaceholder.typicode.com/posts';
            const phUsers : any = import.meta.env.VITE_URL;

            const {data : all} = await getData(phPosts);
            const {data : users2} = await getData(phUsers);

            const users = head(users2)

            // const {data} = await axios.get(ph);


            const apiCRUD: object =  {
                baseURL: import.meta.env.VITE_API_CRUD,
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            }
            const url: string = 'get-all-category/'


            const {data : mainAxi} = await getDataMain(url, apiCRUD);



            this.axi = all;
            this.axiUsers = users;
            this.axiMain = mainAxi

            // console.log(all)
            console.log(name('Victory'))
            console.log(name('Eugene'))
            console.log(uuidv4())
            console.log(import.meta.env.BASE_URL)

        }


    },

    getters: {
        double: (state: any) => state.n+2,
        axios: (state) => state.axi,
        axiosUsers: (state) => state.axiUsers,
        axiosMain: (state) => state.axiMain
    },

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
