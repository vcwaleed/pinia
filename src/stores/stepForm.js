import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useStepFormStore = defineStore('stepForm', () => {
  const step = reactive({ current: 1 }); 

  const formData = reactive({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  return { step, formData };
});
