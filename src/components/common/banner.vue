<template>
  <div class="banner">
    <ul class="clearfix">
      <li>
        <img src="/images/img_1.jpg" alt=""/>
      </li>
      <li>
        <img src="/images/img_2.jpg" alt=""/>
      </li>
      <li>
        <img src="/images/img_3.jpg" alt=""/>
      </li>
      <li>
        <img src="/images/img_4.jpg" alt=""/>
      </li>
    </ul>
  
  </div>
</template>

<script>
  
  import $ from 'jquery';
  import Swipe from '@/assets/js/swipe.js'//引入 非npm包， 模块化方案要对应
  
  export default {
    data(){return {}},
    components:{},
    mounted(){
      new Swipe($('.banner')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      })
    },
    updated(){},
    methods:{}
  }
</script>

<style>
  .banner{position: relative;overflow: hidden; z-index: 1}
  .banner ul li{width:6.4rem;float:left;position: relative;}
  .banner ul li img{width:100%; display:block;}

  .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
  .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
  .banner ol li.active{ background:#fff;}
</style>
