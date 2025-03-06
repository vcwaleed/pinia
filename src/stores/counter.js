import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const UseCouterStore = defineStore('counter', () => {
    const count = ref(1);
    const name = ref("talha");
    const items =ref(['iphone']);

    const doubleCount = computed(() => count.value * 2);
    function increase() {
        count.value++
    }

    return { count, doubleCount, increase ,name ,items }

})