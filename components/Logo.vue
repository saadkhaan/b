<template>
  <div class="text-center">
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      width="138.47"
      height="67.31"
      class="mx-auto"
      id="logo"
    >
      <path
        id="k"
        d="M138.47 1.11l-28.19 24.55 19.94 40.54h-21.76L96.21 38 82 50.22l-3.33 16H19.84A18.37 18.37 0 0 1 1.87 44l5.55-26A21.34 21.34 0 0 1 28.3 1.11h64.26l-5.28 24.33.18.22L112 1.11z"
      />
      <path
        id="s"
        d="M62.11 19.18l-18.82 1q-.63-8.47-9.46-8.48a8.73 8.73 0 0 0-5.53 1.53 4.58 4.58 0 0 0-1.93 3.67 4 4 0 0 0 1.56 2.95q1.55 1.39 7.37 3.57a102.32 102.32 0 0 1 12 5.38 22.43 22.43 0 0 1 7.54 6.57 16.66 16.66 0 0 1 2.93 10.08 19.08 19.08 0 0 1-3.17 10.58 24 24 0 0 1-9.15 8.09q-6 3.17-17 3.17-15.5 0-22-6A19.81 19.81 0 0 1 0 46.09v-1.51l18.91-1.29q0 6.09 2.69 8.59a10.48 10.48 0 0 0 7.4 2.51c3.19 0 5.63-.7 7.3-2.09a6.09 6.09 0 0 0 2.51-4.75 5.23 5.23 0 0 0-1.6-3.68q-1.59-1.69-7.86-3.95Q15 34.76 11.26 30.41a15.34 15.34 0 0 1-3.8-10.47 17.81 17.81 0 0 1 3.13-10.22 20.38 20.38 0 0 1 9.1-7.17A36.34 36.34 0 0 1 34 0q26.43 0 28.11 19.18z"
        fill="#fff"
      />
    </svg> -->

    <a href="https://saadkhan.netlify.com" class="collapsed text-4xl font-bold text-white text-center">
      <span>
        S<span class="collapse">aad</span>
      </span>
      <span>
        K<span class="collapse">han</span>
      </span>
    </a>
  </div>
</template>

<style scoped>
.collapsed{
  letter-spacing: -4px;
}
.collapse{
  display: inline-block;
  opacity: 0;
  max-width: 0;
  transition: all 0.3s 0.2s cubic-bezier(0, 0, 0, 1)
}
.collapsed:hover .collapse{
  max-width: 100%;
  opacity: 1;
}
#k {
  fill: #666;
}
</style>
