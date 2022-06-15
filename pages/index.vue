<template>
  <div class="container mx-auto mt-10 flex justify-center">
    <div class="relative">
      <div class="mt-10 pt-20">
        <face></face>
      </div>
      <div id="fore-foot" class="flex justify-center absolute inset-x-0 bottom-0 pb-5">
        <fore-foot></fore-foot>
      </div>
    </div>
  </div>
</template>

<script>
import Face from '~/components/Face.vue'
import ForeFoot from '~/components/ForeFoot.vue'

export default {
  components: { Face, ForeFoot },
}
</script>

<style>
.container {
  height: 640px;
  width: 360px;
}
</style>
