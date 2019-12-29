<template>
  <footer class="bg-dark mt-5 my-footer pt-1">
    <div class=" pl-5 pb-1 my-footer__link-container">
      <h3 class="pl-5">Me contacter</h3>
      <div class="d-flex">
        <a href="#" class="ml-5 my-footer__link p-1 box-s d-flex align-items-center justify-content-center">
          <img src="images/phone.png" alt="téléphone" class="wrap-xxs mr-md-4" />
          <span class="d-none d-md-block">0497301084</span>
        </a>
        <a href="mailto:ats.serrurier@gmail.com" class="ml-5 box-s my-footer__link p-1 d-flex align-items-center justify-content-center">
          <img src="images/email.png" alt="email" class="wrap-xxs mr-md-4" />
          <span class="d-none d-md-block">ats.serrurier@gmail.com</span>
        </a>
        <a href="#" class="ml-5 my-footer__link box-s p-1 d-flex align-items-center justify-content-center">
          <img
            src="images/location.png"
            alt="localisation"
            class="wrap-xxs mr-md-4"
          />
          <span class="d-none d-md-block">Sprimont</span>
        </a>
      </div>
    </div>

    <div v-if="false" class="col-md-6 col-12 justify-content-around">
      <img src="images/clickplus.png" class="wrap-s ml-5" alt="" />
      <img src="images/hoppe.png" class="wrap-s ml-5" alt="" />
      <img src="images/dom.png" class="wrap-s ml-5" alt="" />
      <img src="images/hoberg.jpg" class="wrap-s ml-5" alt="" />
      <img src="images/titan.jpg" class="wrap-s ml-5" alt="" />
    </div>

    <div class="pl-1 pt-1 d-flex align-items-center">
      <a href="https://www.facebook.com/ats.serrurier/">
        <img src="images/facebook.png" class="facebook" alt="" />
        <h5 v-if="false">Suivez moi sur Facebook</h5>
      </a>
      <div class="text-center my-footer__copy">
        &copy; ATS Serrurier / Vlntngrgr - <a href="#">Plan du site</a> -
        <a href="#">Conditions d'utilisations</a> - <a href="#">Disclaimer</a>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  color: white;
}

footer h3 {
  border-bottom: 2px solid white;
}

.my-footer__link {
  border-radius: 5px;
  border: 2px solid white;
}

.my-footer__copy {
  width: 100%;
  text-align: right;
}

.my-footer__link-container {
  font-size: 1.2rem;

  border-bottom: 2px solid white;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
}

.box-s {
  width: 2.5rem;
}

.facebook {
  width: 2.5rem;
  height: 2.5rem;
}

@media screen and (min-width: 767px) {
  .box-s {
    width: 20rem;
    border: none;
  }

  .facebook {
    width: 3rem;
    height: 3rem;
  }
}
</style>
