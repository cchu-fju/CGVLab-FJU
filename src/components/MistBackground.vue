<template>
  <div class="mist-scene" aria-hidden="true">
    <div class="mist-wash wash-a"></div><div class="mist-wash wash-b"></div>
    <svg class="mist-field mist-field-back" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cgv-cloud-back" x="-45%" y="-85%" width="190%" height="270%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.025" numOctaves="3" seed="7" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="92" xChannelSelector="R" yChannelSelector="G"/>
          <feGaussianBlur stdDeviation="36"/>
        </filter>
      </defs>
      <g filter="url(#cgv-cloud-back)" opacity=".57">
        <ellipse cx="250" cy="450" rx="460" ry="140" fill="#b2d6ee"/><ellipse cx="830" cy="320" rx="470" ry="125" fill="#d6eafa"/>
        <ellipse cx="1310" cy="670" rx="510" ry="168" fill="#80b3d3"/><ellipse cx="530" cy="810" rx="580" ry="152" fill="#c7e2e4"/>
      </g>
    </svg>
    <svg class="mist-field mist-field-front" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cgv-cloud-front" x="-40%" y="-90%" width="180%" height="280%">
          <feTurbulence type="fractalNoise" baseFrequency="0.014 0.035" numOctaves="2" seed="13" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="75"/>
          <feGaussianBlur stdDeviation="28"/>
        </filter>
      </defs>
      <g opacity=".43" filter="url(#cgv-cloud-front)">
        <ellipse cx="-80" cy="650" rx="370" ry="95" fill="#a2c8df"/>
        <ellipse cx="640" cy="730" rx="560" ry="110" fill="#f8ffff"/>
        <ellipse cx="1380" cy="260" rx="460" ry="110" fill="#8fc1d7"/>
      </g>
    </svg>
    <div class="mist-glow"></div>
  </div>
</template>
