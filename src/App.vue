<template>
<div>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
     <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
      </button>
      <router-link to="/" class="nav navbar-brand"><img src="./assets/sblogo.png"></router-link>
     </div>
     <div class="collapse navbar-collapse">
      <ul class="navbar-nav nav pull-right">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/team">Team</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/startups">Startups</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/">About</router-link></li>
      </ul>
     </div>
    </div>
  </nav>
  <div id="app">
    
    <router-view/>
  </div>
  <div class="footer">
   <div class="container">
    <div class="row">
     <div class="col-md-4 col-xs-12">

     </div>
     <div class="col-md-4 col-xs-12">
      <h2>All Rights Reserve</h2>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.footer {
  background-color : gray;
}
.navbar-default {
  background : transparent;
  border : none;
  color : white;
}
.navbar {
  background : transparent;
}
.navbar-default .navbar-nav > li > a {
   color : #fff;
}
</style>
