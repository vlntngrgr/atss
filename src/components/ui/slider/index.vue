<template>
  <carousel 
    class="mx-auto slider-container"
    :perPage="1"
    :autoplay="true"
    :autoplayHoverPause="true">
    <slide class="slider-item" style="background-image: url('/images/1.jpg')"></slide>
    <slide class="slider-item" style="background-image: url('/images/2.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/3.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/4.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/5.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/6.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/7.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/8.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/9.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/10.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/11.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/12.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/13.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/14.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/15.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/16.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/17.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/18.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/19.jpg');"></slide>
    <slide class="slider-item" style="background-image: url('/images/20.jpg');"></slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide 
  }
}
</script>

<style scoped>
.slider-container {
  max-width: 60%;
  max-height: 20rem;
} 

.slider-item {
  width: 50%; 
  height: 20rem;

  background-size: 100% 100%;
}

</style>