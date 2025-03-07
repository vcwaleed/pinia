<script setup>
import { UseCalculatedState } from '../stores/calculated';
const calculated = UseCalculatedState();
</script>

<template>
  <div class="card">
    <h1>Calculator For Tempature </h1>
    <div class="card-content">
      <input v-model="calculated.number_1" placeholder="Enter Your Celsius Value" class="input-field" />
      <input v-model="calculated.number_2" placeholder="Enter Your Celsius Value" class="input-field" />
      <p>Multiplied Number: {{ calculated.multiply }}</p>
      <p>First number: {{ calculated.number_1 }}</p>
      <p>Second number: {{ calculated.number_2 }}</p>
      <button @click="calculated.cal" class="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-800 cursor-pointer">conver to  Fahrenheit</button>
        <span> Temperature of filed 1 in F {{ calculated.f }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px; /* Adjust width as needed */
  margin: 20px auto; /* Center the card */
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s;
}

.input-field:focus {
  border-color: #2563eb;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.3);
}
</style>