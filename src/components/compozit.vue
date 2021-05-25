<template>
  <div class="compatibility-block">
    <div class="compatibility-head">{{title}}</div>
    <div class="compatibility-content">
      <div class="compatibility-row justify-center mb0">
        <div class="compatibility-item" data-value = "A3" v-bind:class="a3" title="A3">{{comp[2]}}</div>
      </div>
      <div class="compatibility-row">
        <div class="compatibility-item" data-value = "A1+A3" v-bind:class="a1a3" title="A1+A3">{{comp[4]}}</div>
        <div class="compatibility-item" data-value = "A2+A3" v-bind:class="a2a3" title="A2+A3">{{comp[5]}}</div>
      </div>
      <div class="compatibility-row">
        <div class="compatibility-item" data-value = "A1" title="A1">{{comp[0]}}</div>
        <div class="l1"></div>
        <div class="compatibility-item" data-value = "A2" title="A2">{{comp[1]}}</div>
      </div>
      <div class="compatibility-row justify-center">
        <div class="compatibility-item" data-value = "A4" v-bind:class="a4" title="A4">{{comp[3]}}</div>
      </div>
      <div class="l2"></div>
      <div class="l3"></div>
      <div class="l4"></div>
      <div class="l5"></div>
      <div class="arrow1"></div>
      <div class="arrow2"></div>

    </div>
  </div>
</template>

<script>
    import * as func from './../functions.js';

    function getClass(val, data1, data2) {
        if (func.genericOPV(data1, data2).includes(val,0)) { return 'part-duo'}
        if (func.isOPV(val,data1)) { return 'part1' }
        if (func.isOPV(val,data2)) { return 'part2' }
        return '';
    }

    export default {
        name: "compozit",
        props: {
            'date1': [Date,String],
            'date2': [Date,String],
            'compType': String,  // AD, AM, AY, M, TP1, ZK
            // 'a1': [String, Number],
            // 'a2': [String, Number],
            'title': String,
            'tp': Boolean
        },
        data() {
            return {
                comp:[],
                a1 : null,
                a2 : null,
                a3 : '',
                a4 : '',
                a1a3 : '',
                a2a3 : '',

            }
        },
        mounted: function () {
          // this.comp = func.compatibilityArray(this.a1,this.a2);

          // if (!this.tp) {
          //     this.a3 = getClass(this.comp[2], this.$parent.date, this.$parent.date2);
          //     this.a4 = getClass(this.comp[3], this.$parent.date, this.$parent.date2);
          //     this.a1a3 = getClass(this.comp[4], this.$parent.date, this.$parent.date2);
          //     this.a2a3 = getClass(this.comp[5], this.$parent.date, this.$parent.date2);
          // }
          //   if (this.compType) {
          //       this.compType = this.compType.toUpperCase();
          //   } else {
          //       this.compType = 'AD'
          //   }
          //
          //   switch (this.compType) {
          //     case 'AD' :
          //         this.a1 = func.ArkDay(this.date1);
          //         this.a2 = func.ArkDay(this.date2);
          //         break;
          //
          //     case 'AM' :
          //         this.a1 = func.ArkMonth(this.date1);
          //         this.a2 = func.ArkMonth(this.date2);
          //         break;
          //
          //     case 'AY' :
          //         this.a1 = func.ArkYear(this.date1);
          //         this.a2 = func.ArkYear(this.date2);
          //         break;
          //
          //     case 'M' :
          //         this.a1 = func.Mission(this.date1);
          //         this.a2 = func.Mission(this.date2);
          //         break;
          //
          //     case 'ZK' :
          //         this.a1 = func.ZK(this.date1);
          //         this.a2 = func.ZK(this.date2);
          //         break;
          //
          //     case 'TP' :
          //         this.a1 = func.TP1(this.date1);
          //         this.a2 = func.TP1(this.date2);
          //         break;
          //
          //   }

            // this.comp = func.compatibilityArray(this.a1,this.a2);
            this.comp = func.compatibilityFromDateArray(this.date1,this.date2,this.compType);


          if (!this.tp) {
              this.a3 = getClass(this.comp[2], this.date1, this.date2);
              this.a4 = getClass(this.comp[3], this.date1, this.date2);
              this.a1a3 = getClass(this.comp[4], this.date1, this.date2);
              this.a2a3 = getClass(this.comp[5], this.date1, this.date2);
          }
        },
    }
</script>

<style scoped>
  .justify-center {justify-content: center!important;}
  .compatibility-block{  width: 150px;  }
  .compatibility-content { position: relative;   width: 100%;}
  .compatibility-head{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .compatibility-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
  }
  .compatibility-item{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    background: #ddd;
  }
  .mb0 { margin-bottom: 0!important;}
  .l1 {
    border: none;
    border-top: 1px solid #333;
    width: 50px;
    height: 1px;

  }
   .l2, .l3, .l4, .l5 {
    position: absolute;
    border: none;
    border-top: 1px solid #333;
    width: 50px;
    height: 1px;

  }

  .l2{
    top: 70px;
    left: 25px;
    transform: rotate(-55deg);
  }
  .l3{
    top: 70px;
    right: 25px;
    transform: rotate(55deg);
  }
  .l4{
    bottom: 44px;
    left: 30px;
    transform: rotate(50deg);
    width: 28px;
    border-color: red;

  }
  .l5{
    bottom: 44px;
    right: 30px;
    transform: rotate(-50deg);
    width: 28px;
    border-color: red;

  }

  .arrow1, .arrow2 {
    position: absolute;
    border: none;
    border-top: 2px dashed #999;
    width: 40px;
    height: 1px;
  }

  .arrow1 {
    top: 90px;
    left: 50px;
    transform: rotate(155deg);
  }
  .arrow2 {
    top: 90px;
    right: 50px;
    transform: rotate(30deg);
  }
  .arrow1:after,
  .arrow2:after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border: 0px solid #999;
    border-top-width: 2px;
    border-right-width: 2px;
    position: absolute;
  }

  .arrow1:after {
    transform: rotate(-140deg);
    top: -5px;
    left: -5px;
  }
  .arrow2:after {
    transform: rotate(-140deg);
    top: -5px;
    left: -5px;
  }



</style>