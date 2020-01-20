<template>
  <div>
    <div id="main" class="antialiased">
          <section class="container mx-auto pt-12 lg:py-64 text-center md:text-left">
            <div class="md:w-9/12 md:ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="138.47" height="67.31" id="logo" class="mx-auto md:mx-0">
                <path id="k_1_" class="st0" d="M138.97 1.69l-28.19 24.55 19.94 40.54h-21.76L96.71 38.59 82.5 50.8l-3.33 15.98H20.34C8.65 66.78-.07 56.01 2.37 44.57l5.55-25.99A21.34 21.34 0 0128.79 1.69h64.27l-5.28 24.33.18.22 24.55-24.55h26.46z"/>
                <path id="s_1_" class="st0" d="M62.61 19.76C62.08.73 36.14-2.81 20.19 3.13 9.04 7.22 3.89 21.77 11.76 30.99c2.53 2.9 8.58 6.07 18.14 9.5 4.17 1.51 6.79 2.83 7.86 3.95 2.21 2.27 2.16 5.84-.91 8.44-2.91 2.59-11.35 3.02-14.74-.42-1.79-1.67-2.69-4.54-2.69-8.59L.5 45.16v1.51c0 6.22 2.16 11.31 6.48 15.27 6.14 6.9 30.27 7.74 38.96 2.77 3.98-2.12 7.03-4.81 9.15-8.08 3.8-5.52 4.46-14.92.24-20.67-1.95-2.69-4.47-4.88-7.55-6.57-3.08-1.69-7.07-3.48-11.99-5.37-3.88-1.45-6.33-2.64-7.37-3.57-1.79-1.55-2.28-4.49.38-6.62 5.47-3.64 15.16-.85 14.99 6.95l18.82-1.02z"/>
              </svg>            

              <div class="mt-4 md:mb-4 uppercase text-6xl font-black text-white leading-none">
                <h1>
                  <span class="hidetext">Saad</span>
                </h1>
                <h1>
                  <span class="hidetext">Khan</span>
                </h1>
              </div>
              
              <div class="flex md:w-9/12  sk-r-xl sk-os-1 text-xl md:text-6xl leading-relaxed md:leading-tight text-white font-medium tracking-wide p-4 md:p-0" id="about-text">
                <p>I am a designer and front-end developer. Specializing in responsive Web design, modern CSS and progressive enhancement.<br>I work with my clients to create interfaces and design systems that work for everyone, and that are optimized for accessibility and speed. Find out more about my <span><a href="#work">work</a></span> or <span><a href="">hire me</a></span>.</p>
              </div>
            </div>
            </section>
            
            <section class="container mx-auto portfolio mt-20 uppercase" id="work">
              <div class="md:w-9/12 ml-6 md:ml-auto md:p-0">
                <h3 class="text-gray-500 eyebrow">Selected work</h3>
                <h2 class="font-extrabold text-white text-center md:text-left text-5xl md:text-lg uppercase" data-splitting>
                  Portfolio
                </h2>
              </div>
              <div class="projects md:w-10/12 md:ml-auto">
                <div class="container mx-auto text-white">
                  <ul>
                    
                    <li v-for="project in projects" :key="project.id">
                      <Project :project="project" />
                    </li>
    
                  </ul>
                </div>
              </div>
            </section>

            <section class="footer container mx-auto pt-32 pb-32">
              <Logo />
            </section>
        </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Project from '~/components/Project.vue';
import { TimelineMax, TweenMax, Sine } from "gsap";


let sOut;
if (process.client) {
  sOut = require('scroll-out');
}

export default {
  head: {
    title: 'Freelance Front-end Developer - Saad Khan',
    meta: [
      { hid: 'description', name: 'description', content: 'I am a front-end web developer having experience of working with HTML, CSS and JavaScript & web frameworks like vue js, react js and svelte js' }
    ]
  },

  methods: {
    textAnim() {
      TweenMax.set("#logo, .hidetext, #about-text", { visibility: 'visible' })
      const tl = new TimelineMax();
        tl.from("#logo path", 1, { stroke: "white", drawSVG: "0" });
        tl.to("#s_1_", .5, { fill: "white", stroke: "none" }, "-=.3")
        tl.to("#k_1_", .5, { fill: "gray", stroke: "none"}, "-=.3")
        tl.staggerFrom(".hidetext", 1, { y: "130%", ease: Power4.easeOut }, 0.5);
        tl.from("#about-text", 0.5, { alpha: 0, y: 50, ease: Power1.easeOut }, "-=.5");
    }
  },

  mounted() {
    sOut({
        once: true,
        targets: ".eyebrow, [data-splitting], ul li",
        threshold: 0
        })
    this.textAnim();
  },
  
  components: {
    Project,
    Logo
  },

  data() {
    return {
      projects: []
    }
  },

  async asyncData({$axios}){

  let projects = await $axios.$get('/projects')
  return {projects}

  }
};
</script>

<style scoped>
#about-text p span{
        position: relative;
        display: inline;
        color: #000;
        overflow: visible;
        transition: color 600ms cubic-bezier(0.115, 0.905, 0.32, 1);
        -webkit-transition: color 600ms cubic-bezier(0.115, 0.905, 0.32, 1);
        -moz-transition: color 600ms cubic-bezier(0.115, 0.905, 0.32, 1);
        -o-transition: color 600ms cubic-bezier(0.115, 0.905, 0.32, 1);
        text-shadow: -1px -1px 0
        #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
      }
      
      #about-text p span:hover{color: #ffffff}
      
      h3{
        position: relative;
        display: inline-block;
        transition: 0.5s;
        transform-origin: left;
        transform: scaleX(0)
      }
      h3[data-scroll="in"]{
        transform: scaleX(1);
        transition-delay: 0s;
      }
      h3:before{
        content: '';
        position: absolute;
        background: slategrey;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-origin: right;
        transition: 0.5s;
      }
      h3[data-scroll="in"]:before{
        transform: scaleX(0);
        transition-delay: 0.5s;
      }

      .titleAnimated{
        font-size: 6.4rem;
      }

      .projects ul li:nth-of-type(n + 2){
        margin-top: 50px;
      }
      
      .titleAnimated[data-scroll="out"] .char {
        transform: translateY(0) rotate(0) scale(1);
        opacity: 0;
      }
      .titleAnimated[data-scroll="in"] .char {
        animation: slide-in 1s cubic-bezier(.5, 0, .5, 1) both;
        animation-delay: calc(90ms * var(--char-index));
        opacity: 1;
      }

      .projects ul li[data-scroll] {
        transition: opacity 1s;
        transition-delay: .4s;
      }
      .projects ul li[data-scroll="in"] {
        opacity: 1;
      }
      .projects ul li[data-scroll="out"] {
        opacity: 0;
      }
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/*.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

 .title {
  font-family: 'Montserrat', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
} */
svg, .hidetext, .hero p{
  visibility: hidden;
}

h1 {
  height: 80px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  margin: 0;
}
.hidetext {
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
}
.text-53 {
  font-size: calc(16px + 4vw);
}
.projects ul li{
  transition: all 0.4s ease;
}
.projects ul li:hover{
  transform: scale(1.1)
}

@keyframes scale{
  from {transform: translate(1);}
  to {transform: translate(1.3)}
}
</style>
