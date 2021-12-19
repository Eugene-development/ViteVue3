import {acceptHMRUpdate, defineStore} from 'pinia'


export const useCounter = defineStore({
    id: 'counter',

    state: () => ({
        n: 1,
    }),

    actions: {
        changeMe() {
            this.n++;
        },

    },

    getters: {
        double: (state) => state.n+2,
    },

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
