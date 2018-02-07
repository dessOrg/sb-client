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

   
     <div class="connect">
      <h3 class="text-center">Connect With Us</h3>
      <div class="row">

      <div class="col-md-4 col-xs-12">
       <div class="footer-loc">
         <p>Top Floor - Dalal House,</p>
         <p>Sir Mbarak Hinawy Road,</p>
         <p>Mombasa, Kenya.</p>
         <p>E: info@swahilibox.co.ke</p>
       <div class="col-md-6 col-xs-12">
        <div class="footer-icon">
         <span><a href="#"><i class="fab fa-facebook-f "></i></a></span>
         <span><a href="#"><i class="fab fa-twitter "></i></a></span> 
         <span><a href="#"><i class="fab fa-linkedin "></i></a></span> 
         <span><a href="#"><i class="fab fa-github"></i></a></span>
        </div>
       </div>
      </div>


     </div>
     <div class="col-md-4 col-xs-12">
       <div class="footer-note">
        <h3>Do Not miss out on our weekily update. Subscribe Now.</h3>
       </div>
     </div>
   
     <div class="col-md-4 col-xs-12">
     <div class="footer-form">
      <div class="col-md-8">
       <div class="form-group">
         <input class="form-control" name="email" type="email" v-bind="name">
       </div>
      </div>
      <div class="col-md-4">
       <div class="form-group">
         <button class="btn btn-primary">Subscribe</button>
       </div>
      </div>
      </div>
    </div>
    </div>
    </div>
   </div>
  </div>


    <div class="footer-strip">
     <span><a href="#">SERVICE</a></span>
     <span><a href="#">MEMBERSHIP TERMS</a></span>
     <span><a href="#">CORD OF CONDUCT </a></span>
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
  background-color : #000;
}
.footer-icon span {
  margin : 5px;
}
.footer-loc {
  border-right : inset;
}
.footer-note {
  
}
.footer-form {
  padding-top : 20px;
}
.footer-strip {
  background-color : #f4f4f5;
  padding-top : 10px;
  padding-bottom : 10px;
  padding-left : 40px;
}
.footer-strip span {
  margin : 10px;
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
