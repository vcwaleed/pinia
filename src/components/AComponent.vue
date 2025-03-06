<script setup>
import {UseCouterStore} from '../stores/counter.js'
const store = UseCouterStore();

</script>
<template>
<hr>
<h2>
    A Componet 

</h2> 

<span>{{ store.count }}</span>
<br/>
<button @click="store.increase"> Increase by click</button>
</template>
<style>

</style>