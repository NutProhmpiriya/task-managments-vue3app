<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false)

    const showModal = () => {
      visible.value = true
    }

    const handleOk = () => {
      visible.value = false
    }

    return {
      visible,
      showModal,
      handleOk,
    }
  },
})
</script>

<template>
  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
