import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const UseCalculatedState = defineStore('calculated', () => {
  const number_1 = ref();
  const number_2 = ref();
  const f = ref();
  const multiply = computed(() => {
    return number_1.value * number_2.value;
  });
  function cal() {
    f.value = (number_1.value * 9 / 5) + 32;
    return f.value;
  }

  return { number_1, number_2, multiply, cal, f };
});