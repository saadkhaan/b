<template>
  <div>
    <nav class="hidden md:block">
      <ul>
        <li class="active">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/work">Work</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  position: fixed;
  top: 50%;
  left: 97%;
  transform: rotateZ(90deg) translateX(-50%);
  transform-origin: bottom left;
}
nav ul {
  display: inline-flex;
}
nav ul li {
  position: relative;
  margin-right: 20px;
  @apply text-gray-600;
}
nav ul li:hover,
nav ul li.active {
  @apply text-gray-400;
}
nav ul li.active:before {
  content: "●";
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
}
</style>