<template>
  <div class="compatibility-block">
    <div class="compatibility-head">{{title}}</div>
    <div class="compatibility-content">
      <div class="compatibility-row justify-center">
        <div class="compatibility-item" data-value = "A3">{{comp[2]}}</div>
      </div>
      <div class="compatibility-row">
        <div class="compatibility-item" data-value = "A1+A3">{{comp[4]}}</div>
        <div class="compatibility-item" data-value = "A2+A3">{{comp[5]}}</div>
      </div>
      <div class="compatibility-row">
        <div class="compatibility-item" data-value = "A1">{{comp[0]}}</div>
        <div class="compatibility-item" data-value = "A2">{{comp[1]}}</div>
      </div>
      <div class="compatibility-row justify-center">
        <div class="compatibility-item" data-value = "A4">{{comp[3]}}</div>
      </div>
      <div class="l1"></div>
      <div class="l2"></div>
      <div class="l3"></div>
      <div class="l4"></div>
      <div class="l5"></div>

    </div>
  </div>
</template>

<script>
    import * as func from './../functions.js';

    export default {
        name: "compozit",
        props: ['a1','a2','title'],
        data() {
            return {comp:[]}
        },
        mounted: function () {
          this.comp = func.compatibilityArray(this.a1,this.a2);
        }

    }
</script>

<style scoped>
  .justify-center {justify-content: center!important;}
  .compatibility-block{
    /*position: relative;*/
    width: 120px;
  }
  .compatibility-content { position: relative;   width: 100%;}
  .compatibility-head{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  .compatibility-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .compatibility-item{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }
  .l1, .l2, .l3, .l4, .l5 {
    position: absolute;
    border: none;
    border-top: 1px solid #333;
    width: 50px;
    height: 1px;

  }

  .l1{bottom: 58px; left: 35px;}
  .l2{
    top: 64px;
    left: 13px;
    transform: rotate(-55deg);
  }
  .l3{
    top: 64px;
    right: 13px;
    transform: rotate(55deg);
  }
  .l4{
    bottom: 35px;
    left: 20px;
    transform: rotate(35deg);
    width: 28px;
    border-color: red;

  }
  .l5{
    bottom: 35px;
    right: 20px;
    transform: rotate(-35deg);
    width: 28px;
    border-color: red;

  }


</style>