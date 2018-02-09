
<template>
 <div>
  <div class="top">
    <h2>Our Startups</h2>
  </div>

  <div class="container">
   <div class="row">
    <div class="col-md-4 col-xs-12">
     <div class="startup">
      <div class="image">
       <img src="../assets/veive.png" class="img-responsive">
      </div>
      <div class="content">
       <h4>Veive</h4>
       <p>Get in touch with friends, post your experiences and reviews. 
       With Veive, you know where to go, when, how and why!..<a href="https://www.veive.co.ke/" target="_blank">Visit</a></p>
      </div>
     </div>
    </div>
    <div class="col-md-4 col-xs-12">
     <div class="startup">
      <div class="image">
       <img src="../assets/salonhunt.png" class="img-responsive">
      </div>
      <div class="content">
       <h4>Salonhunt</h4>
       <p>Salonhunt lets you find salont around around you. It saves you time and always update you on latest hair style. <a href="salonhunt.ke/" target="_blank">visit</a></p>
      </div>
     </div>
    </div>
    <div class="col-md-4 col-xs-12">
     <div class="startup">
      <div class="image">
       <img src="../assets/sec.jpg" class="img-responsive">
      </div>
      <div class="content">
       <h4>SmartSec</h4>
       <p>IoT innovation that detects intrusion, sends quick notifications and provides a real time video of what is happening at your premise.</p>
      </div>
     </div>
    </div>
         
   </div>
  </div>

 </div>
</template>

<script>
export default {
 name: 'Startups',
 data () {
   return {}
 }
}
</script>

<style>
.startup {
  margin : 20px;
}
.image img {
  height : 200px;
  width : 100%;
}
.top {
   padding-top : 50px;
   padding-bottom : 30px;
   background-color : #BDBDBD;
   color : #FF9800;
   background-image : url(../assets/banners/banner2.jpg);
   background-size : cover;
   background-attachment : fixed;
}

</style>
