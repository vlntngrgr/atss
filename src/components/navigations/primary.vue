<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <router-link :to="{name: 'home'}" class="navbar-brand" href="#">ATSS</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" :to="{name: 'home'}" class="nav-item" active-class="'active'" exact>
          <span class="nav-link" href="#">Accueil</span>
        </router-link>
        <li class="nav-item dropdown">
          <span class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </span>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'services' }">Acceuil</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" :to="{ name: 'service', params: {name: 'service-1'} }">Service 1</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" :to="{ name: 'service', params: {name: 'service-1'} }">Service 2</router-link>
            <router-link class="dropdown-item" :to="{ name: 'service', params: {name: 'service-1'} }">Service 3</router-link>
          </div>
        </li>
        <router-link tag="li" :to="{name: 'home'}" active-class="'active'" class="nav-item">
          <span class="nav-link" href="#">Blog</span>
        </router-link>
      </ul>
      <form class="form-inline">
        <a href="tel:0497301084" class="btn btn-xs" style="background-color: red; color: white; font-size: 1.2rem"><span class="number">0497301084</span></a>
      </form>
    </div>  
  </nav>
</template>