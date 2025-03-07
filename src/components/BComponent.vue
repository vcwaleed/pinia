<script setup>
import {UseCouterStore } from '../stores/counter.js'
import {storeToRefs,} from 'pinia'
const store = UseCouterStore();
const {doubleCount} =storeToRefs(store);
store.$patch((state)=>{
    state.items.push('mobile');
    state.count=30
})
</script>
<template>
<hr>
<h2>
    B Componet 
</h2>
<span> {{ doubleCount }}</span>

<h2>Name : {{ store.name }}</h2>
<h3>Name : {{ store.items }}</h3>
</template>
<style>

</style> 