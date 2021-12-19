<template>
  <div class="home">

    <div class="m-10">
      <button class="m-4 bg-cyan-500 shadow-lg ">Подписаться</button>
      <button class="m-4 bg-blue-500 shadow-lg ">Подписаться</button>
      <button class="m-4 bg-indigo-500 shadow-lg ">Подписаться</button>


      <router-link to="/about" class="text-2xl">Go to About</router-link>
      <router-link to="/test" class="text-2xl">Go to Test</router-link>

    </div>

    <div class="justify-center flex bg-yellow-300 items-center h-screen">
      <div class="text-4xl">
        Hello 👋🏼
      </div>
    </div>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// @Options({
//   components: {
//     // HelloWorld,
//   },
// })
// export default class Home extends Vue {}
</script>
