<template>
  <div class="row" v-bind:class="bgr">
    <div class="cell">{{title}} {{name}}</div>
    <div class="cell">{{v1}}</div>
    <div class="cell">{{v2}}</div>
    <div class="cell">{{v3}}</div>
    <div class="cell">{{v4}}</div>
    <div class="cell">{{v5}}</div>
  </div>

</template>

<script>
    export default {
        name: "baseTable2Row",
        props:['v1','v2','v3','v4','v5','title','name','bgr'],
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
  }

  .table .row:not(:last-child) {  border-bottom-width: 1px;}
  .table .cell:not(:last-child) {  border-right-width: 1px;}
  @media (max-width: 500px) { .table .row .cell {   font-size: 12px;}}

</style>