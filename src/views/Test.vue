<template>
<p>
  test-{{double}}
</p>
</template>

<script setup lang="ts">

import {storeToRefs} from "pinia";
import {useCounter} from "../stores/counter";
const main = useCounter();

const {double} = storeToRefs(main)

// import {storeToRefs} from "pinia";
// import {useCounter} from "~/stores/counter";
// const main = useCounter();
//
// const {double, jsonAxios4} = storeToRefs(main);

</script>
