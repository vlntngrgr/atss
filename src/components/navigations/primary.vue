<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
    <form class="form-inline">
      <a href="tel:0497301084" class="btn btn-xs" style="background-color: red; color: white; font-size: 1.2rem"><span class="number">0497301084</span></a>
    </form>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto ml-md-5">
        <router-link tag="li" :to="{name: 'home'}" class="nav-item" active-class="'active'" exact>
          <span class="nav-link" href="#">Accueil</span>
        </router-link>
        <li class="nav-item dropdown">
          <span class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </span>
          <div class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'services' }">Acceuil</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" :to="{ name: 'service', params: {name: 'service-1'} }">Service 1</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" :to="{ name: 'service', params: {name: 'service-1'} }">Service 2</router-link>
            <router-link class="dropdown-item" :to="{ name: 'service', params: {name: 'service-1'} }">Service 3</router-link>
          </div>
        </li>
        <router-link tag="li" :to="{name: 'blog'}" active-class="'active'" class="nav-item">
          <span class="nav-link" href="#">Blog</span>
        </router-link>
      </ul>
      <div class="w-md-50 w-100 text-right">
        <div class="d-md-none dropdown-divider"></div>
        <router-link :to="{name: 'home'}" class="navbar-brand text-right" href="#">Arnaud Toussaint Services Serrurie</router-link>  
        <img src="/images/logo.png" alt="Logo ATSS" class="wrap-xs mr-3"/>
      </div>
    </div> 
  </nav>
</template>