<template>
<p>
  test-{{double}}

  <button class="bg-red-800" @click="changeMe">Click me</button>
  <button class="bg-red-800" @click="getPosts">Click Axios</button>
</p>
</template>

<script setup lang="ts">

import {storeToRefs, mapActions} from "pinia";
import {useCounter} from "../stores/counter";
const main = useCounter();

const {changeMe, getPosts} = main
// const {changeMe} = mapActions(useCounter, ["changeMe"])

const {double} = storeToRefs(main)

</script>
