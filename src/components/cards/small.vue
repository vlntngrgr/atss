<template>
  <div class="card text-white bg-secondary my-card">
    <div class="row no-gutters  my-card__body">
      <div class="col-md-4 col-s-10 card-img">
        <img src="/images/arnaud.jpg" class="card-img-top rounded my-img" alt="...">
      </div>

      <div class="col-md-8 col-s-10" style="width: 100%">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-content">{{ descr }}</p>
          <router-link :to="{name: ''}" class="card-link">Go!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>
  .my-card {
    padding: 0 !important;
  }

  .my-card__body {
    height: 100%;
    width: 100%;
  }

  .wrap-s {
    width: 64px;
    height: auto;
  }

  .wrap-m {
    width: 128px; 
    height: auto;
  }

  .wrap-l {
    width: 256px; 
    height: auto;
  }

  .wrap-xl {
    width: 384px;
    height: auto;
  }

  .wrap-xxl {
    width: 512px; 
    height: auto;
  }

  .card-link {
    position: absolute;
    right: 0rem;
    bottom: 0;

    width: 15rem;
    color: white;
    font-size: 1.2rem;
    text-align: center;

    border-top: 1px solid white;
  }

  .card-link:before {
    content: '';

    width: 1rem;
    height: 2.5rem;

    position: absolute;
    left: -.7rem;
    top: 0;

    transform: rotate(30deg);
    border-left: 1px solid white;
  }

  .card-img {
    display: flex;
    align-items: center;
  }
</style>
