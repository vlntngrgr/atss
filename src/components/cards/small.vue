<template>
  <div class="card text-white bg-none my-card">
    <div class="row no-gutters my-card__body">
      <div class="col-md-4 col-s-10 card-img pt-5">
        <img src="/images/arnaud.jpg" class="card-img-top rounded my-img" alt="...">
      </div>

      <div class="col-md-8 col-s-10 bg-dark card-content" style="width: 100%">
        <div class="card-body">
          <h4 class="card-title my-card__title">{{ title }}</h4>
          <p>{{ descr }}</p>
          <router-link :to="{name: 'home'}" class="card-link">Go!</router-link>
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

    background: rgba(0, 0, 0, 0.3);
    background: linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2), transparent);
    border: none;
  }

  .my-card__title {
    border-bottom: 1px solid white;

    text-align: right;

    padding-right: 3rem;
  }

  .my-card__body {
    height: 100%;
    width: 100%;
  }

  .wrap-xxs {
    width: 1.25rem;
    height: auto;
  }

  .wrap-xs {
    width: 2rem;
    height: auto;
  }

  .wrap-xms {
    width: 45px;
    height: auto;
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
    height: 2.1rem;

    position: absolute;
    left: -.65rem;
    top: 1px;

    transform: rotate(30deg);
    border-left: 1px solid white;
  }

  .card-img {
    display: flex;
    align-items: flex-end;
  }
</style>
