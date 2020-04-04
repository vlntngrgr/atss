<template>
  <footer class="atss-footer">
    <div>
      <h3>Me contacter</h3>
      <div>
        <a href="#">
          <img src="@/assets/images/phone.png" alt="téléphone" class="wrap-xxs mr-md-4" />
          <span class="d-none d-md-block">0497301084</span>
        </a>
        <a href="mailto:ats.serrurier@gmail.com" class="ml-5 box-s my-footer__link p-1 d-flex align-items-center justify-content-center">
          <img src="@/assets/images/email.png" alt="email" class="wrap-xxs mr-md-4" />
          <span class="d-none d-md-block">ats.serrurier@gmail.com</span>
        </a>
        <a href="#" class="ml-5 my-footer__link box-s p-1 d-flex align-items-center justify-content-center">
          <img
            src="@/assets/images/location.png"
            alt="localisation"
            class="wrap-xxs mr-md-4"
          />
          <span class="d-none d-md-block">Sprimont</span>
        </a>
      </div>
    </div>

    <div v-if="false" class="col-md-6 col-12 justify-content-around">
      <img src="@/assets/images/clickplus.png" class="wrap-s ml-5" alt="" />
      <img src="@/assets/images/hoppe.png" class="wrap-s ml-5" alt="" />
      <img src="@/assets/images/dom.png" class="wrap-s ml-5" alt="" />
      <img src="@/assets/images/hoberg.jpg" class="wrap-s ml-5" alt="" />
      <img src="@/assets/images/titan.jpg" class="wrap-s ml-5" alt="" />
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