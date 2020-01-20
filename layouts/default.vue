<template>
  <div class="bg-black">
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style>

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body{
   font-family: 'Montserrat', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

#logo, .hidetext, #about-text{
        visibility: hidden;
      }
      /* #logo{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      } */

      h1 {
        height: 85px;
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

      

      .color-wipes-animate {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          left:0;
          position: fixed;
          top:100%;
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

      @keyframes slide-in {
        from {
          transform: translateY(-1em) rotate(-.5turn) scale(0.5);
          opacity: 0;
        }
      }
      
        @media only screen and (min-width: 360px) and (max-width: 768px){
        .project-thumb{
          height: 200px !important;
        }
        
        .titleAnimated{
        font-size: 3rem;
        }
      }
      .loader {
          font-size: 26px;
          font-weight: 600;
          color: #FFF;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          opacity: 0;
      }

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
