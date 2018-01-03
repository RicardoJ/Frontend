<template>
  <div >
    
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded" >
  <a href="http://www.condorlabs.io/"> <img src="./assets/Condorlabs.svg" width="70" height="50" class="d-inline-block align-top" alt=""></a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
  </button>
  <a href="http://www.condorlabs.io/"> <img src="./assets/logo-text-dark.svg" width="70" height="50" class="d-inline-block align-top" alt=""></a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <router-link class="nav-link" to = "/">User</router-link>
      </li>
      <li class="nav-item">
       <router-link class="nav-link" to = "./statistics">Statisticst</router-link>
      </li>
    </ul>
  </div>
</nav>
<router-view></router-view>

</div>

  
</template>

<script>
import User from './components/User';
import statistics from './components/statistics';


export default {
  name: 'app',
  components: {
    User,
    statistics,
    
  }
}
</script>

<style>
.navbar {
background:#fdcd07

}

</style>
