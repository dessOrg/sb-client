
<template>
 <div>
  <div class="top">
   <h2>Our Team </h2>
  </div>

  <div class="team-exec text-center">
   <h4>EXECUTIVE</h4>
   <hr>
   <div class="container">
    <div class="row">
    <div class="col-md-offset-1 col-md-10 col-xs-12">
     <div class="col-md-4 col-xs-12">
      <div class="prof">
       <img src="../assets/team/avatar1.png" class="img-responsive team-img">
       <h3>Ahmed Maawy</h3>
       <p>Executive Director</p>
      </div>
     </div>
     <div class="col-md-4 col-xs-12">
      <div class="prof">
       <img src="../assets/team/avatar2.png" class="img-responsive team-img">
       <h3>Aly Salim</h3>
       <p>Deputy Executive Director</p>
      </div>
     </div>
     <div class="col-md-4 col-xs-12">
      <div class="prof">
       <img src="../assets/team/avatar3.jpeg" class="img-responsive team-img">
       <h3>Ajra Abdullatif</h3>
       <p>Director of Community Engagement</p>
      </div>
     </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
 name: 'Team',
 data () {
  return {}
 }
}
</script>

<style>
.team-img {
 height : 200px;
}
.team-exec {
 margin-bottom : 20px;
}
.team-exec hr {
  background-color : red;
  color : green;
  width : 110px;
}
.prof {
 text-align : center;
}
.prof img {
 width: 100%;
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
