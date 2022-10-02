import { ref } from 'vue'
import { defineStore } from 'pinia'

const initialState = 0

export const useCounterStore = defineStore('counter', () => {
  const count = ref(initialState)

  return { count }
})
