<script setup>
import { storeToRefs } from 'pinia';
import { useStepFormStore } from '@/stores/stepForm';
import { UseCouterStore } from '../stores/counter.js';

const stepFormStore = useStepFormStore();
const counter = UseCouterStore();
const { step, formData } = storeToRefs(stepFormStore);
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="flex space-x-4 mb-6">
      <div 
        v-for="n in 3" :key="n" 
        class="w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold transition-all"
        :class="step.current >= n ? 'bg-blue-500 shadow-lg' : 'bg-gray-300'"
      >
        {{ n }}
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg transition-all duration-300">
      <div v-if="step.current === 1">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Step 1: Enter User Details</h2>
        <input v-model="formData.name" class="input-field" placeholder="Enter your name" />
        <input v-model="formData.email" class="input-field" placeholder="Enter your email" />
        <input v-model="counter.count" class="input-field" placeholder="Enter count" />

        <div class="flex justify-end mt-4">
          <button @click="step.current = 2" class="btn-primary">Next</button>
        </div>
      </div>
      <div v-if="step.current === 2">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Step 2: Address Details</h2>
        <p class="text-gray-600 mb-2"><strong>Name:</strong> {{ formData.name }}</p>
        <input v-model="formData.address" class="input-field" placeholder="Enter your address" />
        <input v-model="formData.phone" class="input-field" placeholder="Enter your phone" />

        <div class="flex justify-between mt-4">
          <button @click="step.current = 1" class="btn-secondary">Back</button>
          <button @click="step.current = 3" class="btn-primary">Next</button>
        </div>
      </div>
      <div v-if="step.current === 3">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Step 3: Review & Submit</h2>
        <p class="text-gray-700"><strong>Name:</strong> {{ formData.name }}</p>
        <p class="text-gray-700"><strong>Email:</strong> {{ formData.email }}</p>
        <p class="text-gray-700"><strong>Address:</strong> {{ formData.address }}</p>
        <p class="text-gray-700"><strong>Phone:</strong> {{ formData.phone }}</p>

        <div class="flex justify-between mt-4">
          <button @click="step.current = 2" class="btn-secondary">Back</button>
          <button @click="submitForm" class="btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s;
}

.input-field:focus {
  border-color: #2563eb;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.3);
}

.btn-primary {
  background-color: #2563eb;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  transition: 0.3s;
}

.btn-primary:hover {
  background-color: #1e40af;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: #374151;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  transition: 0.3s;
}

.btn-secondary:hover {
  background-color: #d1d5db;
}
</style>
