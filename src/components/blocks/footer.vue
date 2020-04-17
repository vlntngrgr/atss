<template>
  <footer class="atss-footer">
    <h1 class="row" style="padding-left: 4rem;">Me contacter</h1>

    <div class="row">
      <div class="d-flex col-12 col-md-8 atss-footer__content">
        <a  onclick="return gtag_report_conversion('tel: 0497301084');" href="tel: 0497301084" class="d-flex align-items-center mx-auto">
          <img src="/images/phone.png" alt="téléphone" class="p-2 wrap-s" />
          <h3 class="d-none d-md-block">0497301084</h3>
        </a>
        
        <a href="mailto:ats.serrurier@gmail.com" class="align-items-center d-flex mx-auto">
          <img src="/images/email.png" alt="email" class="p-2 wrap-s" />
          <h3 class="d-none d-md-block">ats.serrurier@gmail.com</h3>
        </a> 

        <a target="_blank" href="https://www.google.com/maps/place/A.T.S+Serrurier/@50.5058067,5.1021583,9z/data=!3m1!4b1!4m5!3m4!1s0x47c05924979e3bbd:0x58f0aaccca360d31!8m2!3d50.5052431!4d5.6569098" class="align-items-center d-flex">
          <img
            src="/images/location.png"
            alt="localisation"
            class="wrap-s p-2"
          />
          <h3 class="d-none d-md-block">Sprimont</h3>
        </a>
        
        <a href="https://www.facebook.com/ats.serrurier/" class="d-flex align-items-center mx-auto">
          <img src="/images/facebook.png" class="facebook wrap-s p-2" alt="" />
          <h3 v-if="false" class="d-none d-md-block">Suivez moi sur Facebook</h3>
        </a> 
      </div>

      <div class="col-12 col-md-4">
        <img class="wrap-m mx-1" src="/images/clickplus.png" />
        <img class="wrap-m mx-1" src="/images/hoppe.png" />
        <img class="wrap-m mx-1" src="/images/dom.png" />
        <img class="wrap-m mx-1" src="/images/hoberg.jpg" />
        <img class="wrap-m mx-1" src="/images/titan.jpg" />
      </div>
    </div>
    <div class="text-center row w-100 my-footer__copy">
      <p class="col-12">
        &copy; ATS Serrurier / Vlntngrgr -
        <router-link :to="{name: 'cgv'}" tag="a">Conditions d'utilisations</router-link> - <router-link :to="{name: 'disclaimer'}" tag="a">Disclaimer</router-link>
      </p>
    </div>
  </footer>
</template>
