<template>
  <div class="content-wrap antialiased">
    <div class="flex relative pt-12 pl-12">
      <nuxt-link to="/" class="text-white md:text-4xl">Back</nuxt-link>
    </div>

    <header class="relative p-12 xl:pt-64 p-header">
      <div class="flex relative">
        <h3 class="p-title-fraction first">
          <span>
            <span
              class="scene-element text-white ajax-slidebottom"
              v-if="project.title1"
            >{{ project.title1 }}</span>
            <span class="scene-element text-white ajax-slidebottom" v-else>{{ project.title }}</span>
          </span>
        </h3>
      </div>

      <div class="flex sk-r-xl sk-os-1 header-img-wrap">
        <div class="p-header-img scene-element ajax-slidebottom">
          <img id="project-main-img" :src="project.image" alt="Blue Ocean Evolution" />
        </div>
      </div>

      <div class="flex relative">
        <h3 class="p-title-fraction second">
          <span>
            <span
              class="scene-element text-white ajax-slidebottom"
              v-if="project.title2"
            >{{ project.title2 }}</span>
          </span>
        </h3>
      </div>
    </header>
    <section class="container mx-auto mt-32 md:mt-256">
      <div
        v-for="img in project.allImages"
        v-if="img.image"
        class="mx-auto md:w-9/12 p-12 mt-32 md:mt-32 md:mb-64 imgList"
      >
        <div>
          <h4 class="text-white">{{ img.title }}</h4>
          <img class="mt-4 md:mt-12" :src="img.image" alt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    fadeIn() {
      const el = document.querySelectorAll(".scene-element");
      el.forEach(function(e) {
        e.style.visibility = "visible";
        e.classList.add("ajax-slidebottom");
      });
    }
  },

  mounted() {
    this.fadeIn();
  },

  data() {
    return {
      id: this.$route.params.id
    };
  },

  async asyncData({ params, $axios }) {
    try {
      let project = await $axios.$get(`/projects/${params.id}`);
      return { project };
    } catch (err) {
      // TODO handle error
      console.log(err);
    }
  }
};
</script>

<style scoped>
body {
  color: white;
}

.p-header h3 {
  font-size: 0;
  text-transform: uppercase;
  font-weight: 900;
}
.p-header .p-title-fraction span {
  position: relative;
  overflow: hidden;
}
.p-header h3 span {
  line-height: 0.9em;
  font-size: 10vw;
}
.p-header span {
  display: inline-block;
}
.p-header .p-title-fraction span span {
  overflow: visible;
}
.p-header .p-title-fraction span {
  position: relative;
  overflow: hidden;
}

.p-header .header-img-wrap {
  position: relative;
}
.sk.header-img-wrap {
  overflow: visible;
}
.sk-os-1 {
  margin-left: 23%;
}
.sk-r-xl {
  width: 62%;
}
.p-header .p-header-img {
  z-index: 0;
  background-color: #000;
  position: absolute;
  overflow: hidden;
  top: -2em;
}
.scene-element {
  transition: all 1750ms cubic-bezier(1, 0, 0, 1);
  -webkit-transition: all 1750ms cubic-bezier(1, 0, 0, 1);
  -moz-transition: all 1750ms cubic-bezier(1, 0, 0, 1);
  transition-delay: 0s;
  -o-transition: all 1750ms cubic-bezier(1, 0, 0, 1);
  -webkit-transition-delay: 0.2s;
  -moz-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  -ms-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
.p-header .p-header-img img {
  width: 100%;
  opacity: 0.9;
}
.p-header h3.second,
.p-header h3.third {
  z-index: 5000;
}

@keyframes slideFromBottom {
  0% {
    transform: translateY(100%);
    -moz-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    -o-transform: translateY(100%);
    -ms-transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
    -moz-transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -o-transform: translateY(0%);
    -ms-transform: translateY(0%);
  }
}
.color-wipes-animate {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  left: 0;
  position: fixed;
  top: 100%;
  width: 100%;
  height: 100vh;
  z-index: 1000;
}

.color-wipe {
  height: 100vh;
  width: 100%;
  background: #fff;
  display: none;
}

.scene-element {
  visibility: hidden;
}
.ajax-slidebottom {
  animation: slideFromBottom 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-animation: slideFromBottom 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-animation: slideFromBottom 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-animation: slideFromBottom 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.imgList:nth-last-child(1) {
  margin-bottom: 0;
}

@keyframes slide-in {
  0% {
    transform: translateY(100%);
    -moz-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    -o-transform: translateY(100%);
    -ms-transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
    -moz-transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -o-transform: translateY(0%);
    -ms-transform: translateY(0%);
  }
}
.loader {
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .p-header h3 span {
    line-height: 0.9em;
    font-size: 10vw;
  }

  .p-header .p-header-img {
    top: -0.5em;
  }

  .p-header h3.second,
  .p-header h3.third {
    z-index: 5000;
  }

  .sk-r-xl {
    width: 100%;
  }

  .sk-os-1 {
    margin-left: 0;
  }
}
</style>