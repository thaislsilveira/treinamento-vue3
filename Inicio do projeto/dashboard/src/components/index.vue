<template>
  <teleport to="body">
    <div
    v-if="state.isActive"
    class="fixed
      top-0
      left-0
      x-50
      flex
      items-center
      justify-center
      w-full h-full
      bg-black
      bg-opacity-50"
      @click="handleModalTootle({ status: false })"
      >
      <div class="fixed mx-10">
        <div class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster">
          <div class="flex flex-col px-12 py-10 bg-white">
            <component  :is="state.component"/>
          </div>
        </div>
      </div>
      </div>
  </teleport>
</template>

<script>
import { reactive } from 'vue'

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

export default {
  setup () {
    const state = reactive({
      isActive: false,
      components: {},
      props: {},
      width: DEFAULT_WIDTH
    })

    function handleModalTootle ({ status }) {

    }

    return {
      state
    }
  }
}
</script>

<style>

</style>
