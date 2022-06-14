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

  methods: {
    clickOn () {
      const eyes = document.getElementById('eyes')
      const nomalEyes = '<circle cx="117.118" cy="292.227" r="13.5" fill="#C4C4C4"/><circle cx="245.118" cy="292.227" r="13.5" fill="#C4C4C4"/>'
      const blink80 = '<circle cx="245.118" cy="292.227" r="13.5" fill="#C4C4C4"/><ellipse cx="238.265" cy="274.5" rx="20.2645" ry="11.5" fill="white"/><circle cx="117.118" cy="292.227" r="13.5" fill="#C4C4C4"/><ellipse cx="127.265" cy="274.5" rx="20.2645" ry="11.5" fill="white"/>'
      const blink50 = '<circle cx="245.118" cy="292.227" r="13.5" fill="#C4C4C4"/><ellipse cx="238.265" cy="279.5" rx="20.2645" ry="11.5" fill="white"/><circle cx="117.118" cy="292.227" r="13.5" fill="#C4C4C4"/><ellipse cx="127.265" cy="279.5" rx="20.2645" ry="11.5" fill="white"/>'
      const blink0 = '<circle cx="245.118" cy="292.227" r="13.5" fill="#C4C4C4"/><ellipse cx="236.265" cy="281.5" rx="20.2645" ry="11.5" fill="white"/><path d="M227.769 297.245C230.949 305.954 240.333 310.545 248.728 307.499C257.124 304.453 267.109 292.767 263.929 284.058C269.233 274.097 264.033 291.128 245.274 298.037C236.878 301.083 227.769 297.245 227.769 297.245Z" fill="white"/><circle cx="117.118" cy="292.227" r="13.5" fill="#C4C4C4"/><ellipse cx="125.265" cy="281.5" rx="20.2645" ry="11.5" fill="white"/><path d="M131.926 296.285C128.754 305 119.378 309.588 110.985 306.533C102.592 303.478 92.6042 291.776 95.776 283.062C90.4674 273.089 95.6774 290.138 114.431 297.065C122.824 300.12 131.926 296.285 131.926 296.285Z" fill="white"/>'

    setTimeout(function() {
      eyes.innerHTML = blink80
      }, 100)
    setTimeout(function() {
      eyes.innerHTML = blink50
      }, 200)
    setTimeout(function() {
      eyes.innerHTML = blink0
      }, 300)
    setTimeout(function() {
      eyes.innerHTML = blink50
      }, 600)
    setTimeout(function() {
      eyes.innerHTML = blink80
      }, 700)
    setTimeout(function() {
      eyes.innerHTML = nomalEyes
      }, 800)
    }
  }
}
</script>

<style>
.container {
  height: 640px;
  width: 360px;
}

</style>