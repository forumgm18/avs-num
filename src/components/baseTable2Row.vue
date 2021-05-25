<template>
  <div class="row" v-bind:class="bgr">
    <div class="cell">{{title}} {{name}}</div>
    <div class="cell">{{v[0]}}</div>
    <div class="cell">{{v[1]}}</div>
    <div class="cell">{{v[2]}}</div>
    <div class="cell">{{v[3]}}</div>
    <div class="cell">{{v[4]}}</div>
  </div>

</template>

<script>
    import * as func from './../functions.js';

    export default {
        name: "baseTable2Row",
        // props:['v1','v2','v3','v4','v5','title','name','bgr'],
        props:{
            'date': [Date, String],
            'title': String,
            'name': String,
            'bgr': String
        },
        data() {
            return {
                v: [],
            }
        },
        mounted: function () {
            this.v = func.arrayOPV(this.date)
        }
    }
</script>

<style scoped>
  .table .row {
    flex-wrap: nowrap;
    margin-bottom: 0;
  }

  .table .row {border: 0px solid gray;}
  .table .row .cell {
    max-width: calc( 100% / 6);
    width: calc( 100% / 6);
    border: 0px solid gray;
    margin-right: 0;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    color: #333;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .table .row:not(:last-child) {  border-bottom-width: 1px;}
  .table .cell:not(:last-child) {  border-right-width: 1px;}
  @media (max-width: 500px) { .table .row .cell {   font-size: 12px;}}

</style>