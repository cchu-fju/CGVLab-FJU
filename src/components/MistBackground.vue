<template>
  <!-- Decorative only. Independent CSS layers ensure visible motion without JavaScript or network access. -->
  <div class="mist-scene" aria-hidden="true">
    <div class="mist-wash wash-a"></div>
    <div class="mist-wash wash-b"></div>
    <div class="mist-cloud cloud-one"></div>
    <div class="mist-cloud cloud-two"></div>
    <div class="mist-cloud cloud-three"></div>
    <svg class="mist-ribbons" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ribbonBlue" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#4288c1" stop-opacity="0"/><stop offset=".44" stop-color="#4288c1" stop-opacity=".48"/><stop offset="1" stop-color="#7cc5d4" stop-opacity="0"/></linearGradient>
        <linearGradient id="ribbonGreen" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#2b9f8c" stop-opacity="0"/><stop offset=".55" stop-color="#2b9f8c" stop-opacity=".35"/><stop offset="1" stop-color="#2b9f8c" stop-opacity="0"/></linearGradient>
        <linearGradient id="ribbonPurple" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#916cc9" stop-opacity="0"/><stop offset=".48" stop-color="#916cc9" stop-opacity=".29"/><stop offset="1" stop-color="#916cc9" stop-opacity="0"/></linearGradient>
        <filter id="ribbonSoft"><feGaussianBlur stdDeviation="9"/></filter>
      </defs>
      <g class="ribbon-layer ribbon-a" filter="url(#ribbonSoft)" fill="none" stroke-linecap="round">
        <path d="M-240 290 C120 90 240 450 570 280 S1010 30 1630 300" stroke="url(#ribbonBlue)" stroke-width="60"/>
        <path d="M-180 350 C200 180 345 490 650 350 S1150 140 1620 380" stroke="url(#ribbonGreen)" stroke-width="28"/>
      </g>
      <g class="ribbon-layer ribbon-b" filter="url(#ribbonSoft)" fill="none" stroke-linecap="round">
        <path d="M-180 780 C120 560 330 820 680 650 S1160 530 1600 710" stroke="url(#ribbonPurple)" stroke-width="55"/>
        <path d="M-160 715 C140 540 350 735 660 600 S1100 450 1600 600" stroke="url(#ribbonBlue)" stroke-width="42"/>
      </g>
    </svg>
    <div class="mist-particles">
      <span v-for="n in 12" :key="n" class="mist-particle" :style="{'--i':n}"></span>
    </div>
    <div class="mist-glow"></div>
  </div>
</template>
