<template>
  <div>
    <svg width="360" height="640" viewBox="0 0 360 640" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="360" height="640" fill="white"/>
      <g id='face'>
        <g id='eyes'>
          <circle cx="117.118" cy="292.227" r="13.5" fill="#C4C4C4"/>
          <circle cx="245.118" cy="292.227" r="13.5" fill="#C4C4C4"/>
        </g>
        <g id='nose' v-on:click="clickOn">
          <path d="M177.972 373.788C179.797 375.348 182.473 375.39 184.347 373.888L212.618 351.227C215.621 348.036 213.428 342.727 209.046 342.727H155.167C150.521 342.727 148.387 348.51 151.919 351.528L177.972 373.788Z" fill="#C4C4C4"/>
          <ellipse cx="181.618" cy="346.727" rx="32" ry="13" fill="#C4C4C4"/>
        </g>
        <g id='muzzle'>
          <line x1="181.648" y1="359.727" x2="181.648" y2="397.841" stroke="#C4C4C4" stroke-width="3"/>
          <line x1="181.057" y1="395.985" x2="149.527" y2="420.008" stroke="#C4C4C4" stroke-width="3"/>
          <line x1="182.483" y1="396.501" x2="214.867" y2="419.361" stroke="#C4C4C4" stroke-width="3"/>
        </g>
        <g id='ears'>
          <g id='left-ear'>
            <path d="M134.126 161.506C120.548 158.112 96.6489 124.03 96.6489 124.03" stroke="#C4C4C4" stroke-width="3"/>
            <path d="M90.565 166.618C81.8021 156.985 96.2219 122.777 96.2219 122.777" stroke="#C4C4C4" stroke-width="3"/>
          </g>
          <g id='right-ear'>
            <path d="M225.022 161.508C238.6 158.114 262.499 124.03 262.499 124.03" stroke="#C4C4C4" stroke-width="3"/>
            <path d="M268.583 166.619C277.346 156.986 262.926 122.777 262.926 122.777" stroke="#C4C4C4" stroke-width="3"/>
          </g>
        </g>
      </g>
      <g id='fore-foot'>
        <path d="M114.505 575C114.505 575 120.395 566.918 91.5331 557.104C62.6708 547.289 45 575 45 575" stroke="#C4C4C4" stroke-width="3"/>
        <path d="M62.9876 558C62.9876 558 79.1438 561.923 80.6584 575" stroke="#C4C4C4" stroke-width="3"/>
        <path d="M88.7267 557C88.7267 557 99.4975 560.923 100.507 574" stroke="#C4C4C4" stroke-width="3"/>
        <path d="M245.495 576C245.495 576 239.605 567.918 268.467 558.104C297.329 548.289 315 576 315 576" stroke="#C4C4C4" stroke-width="3"/>
        <path d="M297.012 559C297.012 559 280.856 562.923 279.342 576" stroke="#C4C4C4" stroke-width="3"/>
        <path d="M271.273 558C271.273 558 260.503 561.923 259.493 575" stroke="#C4C4C4" stroke-width="3"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    clickOn () {
      console.log('Hello!')
    }
  }
}
</script>
