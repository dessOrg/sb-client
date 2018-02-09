
<template>
 <div>
  <div class="top">
   <h2>Events</h2>
  </div>

  <div class="events">
    <div class="container">
     <div class="row">
       <div class="col-md-12 col-xs-12">

        <div class="event">
        <div class="col-md-12 col-xs-12">
         <div class="col-md-offset-1 col-md-4 col-xs-12">
           <div class="event-img">
            <img class="img-responsive" src="../assets/events/rails.jpg">
           </div>
         </div>
         <div class="col-md-5 col-md-12">
          <div class="event-cont">
           <h3>Rails Girls MeetUp</h3>
           <p>Applications to being part of RailsGirlsMsa workshop close today.You don't wanna miss out. </p>          <span><strong>March 20th 2o17</strong></span>
           <div class="event-rsvp">
            <button class="btn btn-default">RSVP</button>
           </div>
          </div>
         </div>
         </div>
        </div>

        <div class="col-md-12 col-xs-12"> <hr> </div>

        <div class="event">
        <div class="col-md-12 col-xs-12">
         <div class="col-md-offset-1 col-md-4 col-xs-12">
           <div class="event-img">
            <img class="img-responsive" src="../assets/events/3d.jpeg">
           </div>
         </div>
         <div class="col-md-5 col-md-12">
          <div class="event-cont">
           <h3>3D Printing Workshop</h3>
           <p>Swahilibox will hosting 3D printing workshop, come with your laptop. We will have a special guest at this session....an Environment Artist who has worked in the video game industry for many years who can share her perspective on 3D modelling for video games. </p>          <span><strong>March 20th 2o17</strong></span>
           <div class="event-rsvp">
            <button class="btn btn-default">RSVP</button>
           </div>
          </div>
         </div>
        
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
  name: 'Events',
  data () {
   return {}
  }
}
</script>

<style>
.top {
   padding-top : 50px;
   padding-bottom : 30px;
   background-color : #BDBDBD;
   color : #FF9800;
   background-image : url(../assets/banners/banner2.jpg);
   background-size : cover;
   background-attachment : fixed;
}
.events {
 margin : 10px;
}
.event {
 text-align : left;
 background-color : red;
  
}
.event-img img {
  width : 100%;
}
.event-cont h3 {
  color : green;
}
.event-rsvp {
  margin : 10px;
}
</style>
